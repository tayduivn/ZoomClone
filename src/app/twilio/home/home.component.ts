import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Room, LocalTrack, LocalVideoTrack, LocalAudioTrack, RemoteParticipant } from 'twilio-video';
import { RoomsComponent } from '../rooms/rooms.component';
import { CameraComponent } from '../camera/camera.component';
import { SettingsComponent } from '../settings/settings.component';
import { ParticipantsComponent } from '../participants/participants.component';
import { VideochatService } from '../videochat.service';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Job } from 'src/app/models/job';
import { BaseCrudApi } from 'src/app/models/BaseViewModel';
import { TokenService } from 'src/app/services/user/token.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseCrudApi<Job> implements OnInit, OnDestroy {

    @ViewChild('rooms', { static: false }) rooms!: RoomsComponent;
    @ViewChild('camera', { static: false }) camera!: CameraComponent;
    @ViewChild('settings', { static: false }) settings!: SettingsComponent;
    @ViewChild('participants', { static: false }) participants!: ParticipantsComponent;

    activeRoom: Room | undefined;
    public SessionID = 0;
    public username = '';

    private notificationHub!: HubConnection;

    constructor(
        private readonly videoChatService: VideochatService,
        private activatedroute: ActivatedRoute,
        private jobService: JobService,
        private tokenService: TokenService,
        private router: Router,
        private message: NzMessageService) { super(); }

    async ngOnInit() {
        const SessionID: any = this.activatedroute.snapshot.paramMap.get('id');
        if (!isNaN(SessionID)) {
          this.SessionID = Number(SessionID);
        }
        this.getItem();
        const builder =
            new HubConnectionBuilder()
                .configureLogging(LogLevel.Debug)
                .withUrl(`${environment.apiUrl}VideoNotificationHub?username=${this.tokenService.getUserName()}`);

        this.notificationHub = builder.build();
        this.notificationHub.on('RoomsUpdated', async (updated) => {
            if (updated) {
                await this.rooms.updateRooms();
            }
        });
        await this.notificationHub.start()
            .then(() => console.log("Connection started"))
            .catch(error => console.log(JSON.stringify(error)));
    }

    async onSettingsChanged(deviceInfo: MediaDeviceInfo) {
        await this.camera.initializePreview(deviceInfo);
    }

    async onLeaveRoom(_: boolean) {
        if (this.activeRoom) {
            this.activeRoom.disconnect();
            this.activeRoom = null!;
        }

        this.camera.finalizePreview();
        const videoDevice = this.settings.hidePreviewCamera();
        this.camera.initializePreview(videoDevice);

        this.participants.clear();
    }

    async onRoomChanged(roomName: string) {
        if (roomName) {
            if (this.activeRoom) {
                this.activeRoom.disconnect();
            }

            this.camera.finalizePreview();
            const tracks = await this.settings.showPreviewCamera();

            this.activeRoom = await this.videoChatService.joinOrCreateRoom(roomName, tracks);

            this.participants.initialize(this.activeRoom!.participants);
            this.registerRoomEvents();

            this.notificationHub.send('RoomsUpdated', true);
        }
    }

    onParticipantsChanged(_: boolean) {
        this.videoChatService.nudge();
    }

    private registerRoomEvents() {
        this.activeRoom!
            .on('disconnected',
                (room: Room) => room.localParticipant.tracks.forEach(publication => this.detachLocalTrack(publication.track)))
            .on('participantConnected',
                (participant: RemoteParticipant) => this.participants.add(participant))
            .on('participantDisconnected',
                (participant: RemoteParticipant) => this.participants.remove(participant))
            .on('dominantSpeakerChanged',
                (dominantSpeaker: RemoteParticipant) => this.participants.loudest(dominantSpeaker));
    }

    private detachLocalTrack(track: LocalTrack) {
        if (this.isDetachable(track)) {
            track.detach().forEach(el => el.remove());
        }
    }

    private isDetachable(track: LocalTrack): track is LocalAudioTrack | LocalVideoTrack {
        return !!track
            && ((track as LocalAudioTrack).detach !== undefined
                || (track as LocalVideoTrack).detach !== undefined);
    }


    getItem() {
        this.isLoading = true;
        this.add = this.jobService.getMyJob(this.SessionID).subscribe(res => {
          if (res.isSuccess) {
            this.item = res.model!;
            if(this.item.postedBy === this.tokenService.getUserName()){
                this.username = this.item.acceptedBy;
            }else{
                this.username = this.item.postedBy;
            }
            console.log(this.username);
            //this.isDisable = new Date(this.item.endDateTime) < new Date(Date.now());
        //     if (!this.jobService.isAuthenticateToNavigate(this.item.endDateTime)) {
        //       this.router.navigateByUrl("/Logout");
        //     }
        //   } else {
        //     this.message.create('error', res.message?.toString()!, {
        //       nzDuration: 10000
        //     });
        //     this.router.navigateByUrl("/Logout");
          }
        },
          (error: any) => {
            this.isError = true;
            this.errorMessage = error.error;
          },
          () => {
            this.isLoading = false;
          });
      }
    ngOnDestroy(): void {
        this.dispose();
        this.notificationHub.stop().then(() => console.log('service has been end')).catch(er => console.log(er));
        this.onLeaveRoom(true);
    }
}
