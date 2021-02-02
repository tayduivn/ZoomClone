import { JobService } from './../../services/job.service';
import { TokenService } from './../../admin/services/token.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Message, VideoService } from '../video.service';
const mediaConstraints = {
  audio: true,
  video: { width: 320, height: 320 }
};
const offerOptions = {
  offerToReceiveAudio: true,
  offerToReceiveVideo: true
};
const PEER_CONNECTION_CONFIG: any = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" },
    {
      username: "0kYXFmQL9xojOrUy4VFemlTnNPVFZpp7jfPjpB3AjxahuRe4QWrCs6Ll1vDc7TTjAAAAAGAG2whXZWJUdXRzUGx1cw==",   
      credential: "285ff060-5a58-11eb-b269-0242ac140004",   
      urls: [       
        "turn:bn-turn1.xirsys.com:80?transport=udp",       
        "turn:bn-turn1.xirsys.com:3478?transport=udp",       
        "turn:bn-turn1.xirsys.com:80?transport=tcp",       
        "turn:bn-turn1.xirsys.com:3478?transport=tcp",       
        "turns:bn-turn1.xirsys.com:443?transport=tcp",       
        "turns:bn-turn1.xirsys.com:5349?transport=tcp"   
       ]
    }
  ]
};


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit , AfterViewInit {
  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLVideoElement>;

  private localStream!: MediaStream;
  private remoteStream!: MediaStream;
  private peerConnection!: RTCPeerConnection;
  isHubConnected: boolean = false;
  config: RTCConfiguration = { iceServers: [] };
  iceCandidateArray: RTCIceCandidate[] = [];

  constructor(private videoService: VideoService,
    private ngZone: NgZone,
    private tokenService: TokenService,
    private jobService: JobService) {
      this.config.iceServers?.push({ urls: 'stun:stun.services.mozilla.com' });
      this.config.iceServers?.push({ urls: 'stun:stun.l.google.com:19302' });
      // this.jobService.getIceServers().subscribe(data => {
      //   console.log(JSON.stringify(data));
      //   data?.forEach(server => {
      //     this.config.iceServers?.push(server);
      //   });
      // });
     }
  ngOnInit(): void {
    this.videoService.createConnection(this.tokenService.getUserName());
    this.videoService.startConnection();
    this.videoService.registerOnServerEvents();
    this.subscribeToevent();
  }

  async ngAfterViewInit() {
    this.requestMediaDevices();
  }

  private async requestMediaDevices(): Promise<void> {
    this.localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
    this.localVideo.nativeElement.srcObject = this.localStream;
  }

  pauseLocalVideo(){
    this.localStream?.getTracks().forEach(track => {
      track.enabled = false;
    });
  }
  startLocalVideo(){
    this.localStream?.getTracks().forEach(track => {
      track.enabled = true;
    });
  }

  async call(): Promise<void>{
    this.createPeerConnection();

    this.localStream?.getTracks().forEach(track => {
      this.peerConnection?.addTrack(track, this.localStream);
    });

    // try{
    //   const offer: RTCSessionDescriptionInit = await this.peerConnection.createOffer(offerOptions);
    //   await this.peerConnection.setLocalDescription(offer);
    //   //Send data to signaling server
    //   this.videoService.sendMessage("aftab@gmail.com",
    //   {        
    //     type: 'offer',
    //     data: offer
    //   })
    // }catch(error){
    //   this.handleGetUserMediaError(error);
    // }

  }

  createPeerConnection(): void {
    this.peerConnection = new RTCPeerConnection(this.config);

    this.peerConnection.onnegotiationneeded = async (e) => {
      console.log(`onnegotiationneeded: ${JSON.stringify(e)}`);
      // send the offer to the other peer
      try{
        const offer: RTCSessionDescriptionInit = await this.peerConnection.createOffer(offerOptions);
        console.log(`Created offer successfully.`);
        await this.peerConnection.setLocalDescription(offer);
        console.log(`Offer setLocalDescription successfully.`);
        //Send data to signaling server
        this.videoService.sendMessage("aftab@gmail.com",
        {        
          type: 'offer',
          data: this.peerConnection.localDescription
        });
        console.log(`Send offer successfully.`);
      }catch(error){
        this.handleGetUserMediaError(error);
      }
    }
    this.peerConnection.onicecandidate = this.handleIceCandidateEvent;
    this.peerConnection.onicegatheringstatechange = this.handleIceConnectionStateChangeEvent;
    this.peerConnection.onsignalingstatechange = this.handleSignalingStateEvent;
    this.peerConnection.ontrack = this.handleTrackEvent;

  }
  private closeVideoCall(){
    if(this.peerConnection){
      this.peerConnection.onicecandidate = null;
      this.peerConnection.onicegatheringstatechange = null;
      this.peerConnection.onsignalingstatechange = null;
      this.peerConnection.ontrack = null;
    }
    this.peerConnection.getTransceivers().forEach(tra => {
      tra.stop();
    });
    this.peerConnection.close();
  }
  handleGetUserMediaError(e: Error): void {
    switch(e.name){
      case 'NotFoundError':
        alert('No camera and/or microphone found');
        break;
      case 'SecurityError':
      case 'PermissionDeniedError':
        // Do nothing
        break;
      default:
        console.error(e);
        alert(`Error:  ${JSON.stringify(e.message)}`);
        break;
    }
    this.closeVideoCall();
  }
  private handleIceCandidateEvent = (event: RTCPeerConnectionIceEvent) => {
    console.log(`Local: handleIceCandidateEvent: ${JSON.stringify(event)}`);
    if(event.candidate){
      this.videoService.sendMessage("aftab@gmail.com",
      {
        type: 'ice-candidate',
        data: event.candidate
      });
    }
  };
  private handleIceConnectionStateChangeEvent = (event: Event) => {
    console.log(`Local: handleIceConnectionStateChangeEvent: ${JSON.stringify(event)}`);
    switch(this.peerConnection.iceConnectionState){
      case 'closed':
      case 'disconnected':
      case 'failed':
        this.closeVideoCall();
        break;
    }
  }
  private handleSignalingStateEvent = (event: Event) => {
    console.log(`Local: handleSignalingStateEvent: ${JSON.stringify(event)}`);
    switch(this.peerConnection.signalingState){
      case 'closed':
        this.closeVideoCall();
        break;
      case 'stable':
        break;
      //  this.videoService.sendMessage("aftab@gmail.com",
      //  {
      //    type: 'ice-candidate',
      //    data: this.iceCandidateArray
      //  });
    }
  }
  private handleTrackEvent = (event: RTCTrackEvent) => {
    console.log("Local: handleTrackEvent " + " - " + JSON.stringify(event.streams[0].id) + " - " + JSON.stringify(event));
    this.remoteVideo.nativeElement.srcObject = new MediaStream([event.track]);//event.streams[0];
  }
  private subscribeToevent(){
    this.videoService.messageReceived.subscribe((msg: Message) => {
      this.ngZone.run(() => {
        switch(msg.type){
          case 'offer':
            this.handleOfferMessage(msg.data);
            break;
          case 'answer':
            this.handleAnswerMessage(msg.data);
            break;
          case 'hangup':
            this.handleHangupMessage(msg);
            break;
          case 'ice-candidate':
            this.handleIceCandidateMessage(msg.data);
            break;
          default:
            console.log("Unknown message of type " + msg.type);
        }
      });
    });
    this.videoService.isConnected.subscribe((isconnected: boolean) => {
      this.ngZone.run(() => {
        this.isHubConnected = isconnected;
      });
    });
  }
  private handleOfferMessage(msg: RTCSessionDescriptionInit): void{
    console.log(`Remote: Received Offer: ${JSON.stringify(msg)}`);
    if(!this.peerConnection){
      this.createPeerConnection();
    }
    if(this.localStream){
      this.startLocalVideo();
    }
    this.peerConnection.setRemoteDescription(new RTCSessionDescription(msg))
    .then(() => {
      console.log(`Remote: offer set as setRemoteDescription successfully`);
      this.localVideo.nativeElement.srcObject = this.localStream;
      this.localStream.getTracks().forEach(track => {
        this.peerConnection.addTrack(track, this.localStream);
      });
    })
    .then(() => {
      console.log(`Remote: created answer successfully`);
      return this.peerConnection.createAnswer();
    })
    .then((answer: RTCSessionDescriptionInit) => {
      console.log(`Remote: answer setLocalDescription successfully`);
      return this.peerConnection.setLocalDescription(answer);
    })
    .then(() => {
      this.videoService.sendMessage("srk@gmail.com",
      { type: 'answer' , data: this.peerConnection.localDescription });
      console.log(`Remote: Answer send successfully`);
      // Send To server { type: 'answer' , data:  this.peerConnection.localDescription }
    })
    .catch(this.handleGetUserMediaError);
  }
  private handleAnswerMessage(data: any): void{
    console.log(`handleAnswerMessage: ${JSON.stringify(data)}`);
    console.log(`Answer Received successfully.`);
    this.peerConnection.setRemoteDescription(new RTCSessionDescription(data));
    console.log(`Answer setRemoteDescription successfully.`);
  }
  private handleHangupMessage(msg: Message){
    this.closeVideoCall();
  }

  private handleIceCandidateMessage(data: any): void{
    if(data.candidate){
      this.peerConnection.addIceCandidate(data)
      .then(() => console.log("addIceCandidate success"))
      .catch(err => console.log(`Adding Ice Candidate Error: ${err.name}`))
    }
  }

  hangup(){
    // Send Signaling Server hangup web socket call
    this.closeVideoCall();
  }
}
