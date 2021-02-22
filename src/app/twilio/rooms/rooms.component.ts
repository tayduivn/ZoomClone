import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from 'src/app/services/user/token.service';
import { NamedRoom, VideochatService } from '../videochat.service';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {

    @Output() roomChanged = new EventEmitter<string>();
    @Input() activeRoomName!: string;
    @Input() set setUserName(username: string) {
        this.usersname_2 = username;
    }
    @Output('leaveRoom') leaveRoom = new EventEmitter<boolean>();

    roomName!: any;
    usersname_2!: any;
    rooms!: NamedRoom[];
    counDown: any;
    seconds = 0;
    minutes = 0;
    hours = 0;

    private subscription!: Subscription;
    private subscriptionTimer!: Subscription;

    constructor(
        private readonly videoChatService: VideochatService, private tokenService: TokenService) { }

    async ngOnInit() {
        await this.updateRooms();
        this.subscription =
            this.videoChatService
                .$roomsUpdated
                .pipe(tap(_ => this.updateRooms()))
                .subscribe();
        this.roomName = this.randomString();
        this.videoChatService.startCountDown.subscribe(res => {
            if (res) {
                this.subscriptionTimer = interval(1000)
                    .subscribe(x => {
                        this.seconds++;
                        if(this.seconds === 60){
                            this.minutes++;
                        }
                        if(this.seconds > 60){
                            this.seconds = 0;
                        }
                        if(this.minutes === 60){
                            this.hours++;
                        }
                        if(this.minutes > 60){
                            this.minutes = 0;
                        }
                    });
            } else {
                if (this.subscriptionTimer) {
                    this.subscriptionTimer.unsubscribe();
                    this.seconds = 0;
                    this.minutes = 0;
                    this.hours = 0;
                }
            }
        });
    }
    onLeaveRoom() {
        this.leaveRoom.emit(true);
        this.videoChatService.startCountDown.next(false);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionTimer) {
            this.subscriptionTimer.unsubscribe();
        }
    }
    onTryAddRoom() {
        if (this.roomName) {
            this.onAddRoom(this.roomName);
        }
    }

    onAddRoom(roomName: string) {
        this.roomName = null;
        this.roomChanged.emit(roomName);
    }

    onJoinRoom(roomName: string) {
        this.roomChanged.emit(roomName);
        this.videoChatService.startCountDown.next(true);
    }

    async updateRooms() {
        this.rooms = (await this.videoChatService.getAllRooms()) as NamedRoom[];

        var usersname_1 = `${this.tokenService.getUserName()}`;
        this.rooms.forEach((r, index) => {
            if (r.name.indexOf(usersname_1) !== -1 && r.name.indexOf(this.usersname_2) !== -1) {
                console.log(JSON.stringify(r));
            }
            else {
                this.rooms.splice(index, 1);
            }
        })
    }
    public randomString() {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let length = 8;
        var result = `${this.usersname_2} ${this.tokenService.getUserName()}`;
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
}
