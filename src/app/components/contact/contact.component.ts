import { JobService } from 'src/app/services/job.service';
import { TokenService } from 'src/app/admin/services/token.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { OfferAnswerClass } from 'src/app/models/job';
import { NotifService } from 'src/app/services/notif.service';
import { environment } from 'src/environments/environment.prod';
import { Iceserver } from 'src/app/models/iceserver';
declare var $: any;
let PEER_CONNECTION_CONFIG: any = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" },
    {
      urls: "turn:numb.viagenie.ca",
      username: "khanxhahrukh@gmail.com",
      credential: "file348132"
    }
  ]
};
declare global {
  interface Window {
    localPeerConnection: RTCPeerConnection;
    remotePeerConnection: RTCPeerConnection;
    sendChannel: RTCDataChannel;
    receiveChannel: RTCDataChannel;
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit , AfterViewInit, OnDestroy {
  ReceivedOffer: string = "";
  connectionClass: string = "btn-primary";
  Creator: boolean = false;
  localPeerConnection!: RTCPeerConnection;
  remotePeerConnection!: RTCPeerConnection;
  sendChannel!: RTCDataChannel;
  receiveChannel!: RTCDataChannel;
  conf: RTCConfiguration = { iceServers: [] };
  constructor(
    private notif: NotifService,
    private jobS: JobService,
    private http: HttpClient,
    private ngZone: NgZone,
    private tokenService: TokenService)
  {
    
  }
  ngOnInit(): void {
    this.jobS.getIceServers().subscribe(res => {
      res?.forEach(x => {
        console.log(JSON.stringify(x));
        this.conf.iceServers?.push({
          credential: x.credential,
          urls: x.urls,
          username: x.username
        });
      });
    });
  }
  ngAfterViewInit(): void {
    this.subscribeToEvents();
  }
  startCon(){
    this.notif.startConnection();
    this.notif.registerOnServerEvents();
  }
  sendOffer(){
    console.log(this.conf);
    this.localPeerConnection = new RTCPeerConnection(this.conf);
    this.sendChannel = this.localPeerConnection.createDataChannel("DataChannel");
    // navigator.mediaDevices.getUserMedia({ video: true, audio:  false })
    // .then((stream: MediaStream) => {
    //   stream.getTracks().forEach((track: MediaStreamTrack) => {
    //     window.localPeerConnection.addTrack(track);
    //    });
    // });
    // window.localPeerConnection.ontrack = this.onlocaltrack;
    this.localPeerConnection.onicecandidate = this.gotLocalCandidate;
    this.localPeerConnection.createOffer()
    .then((ofr) => {
      console.log(`Local Description OR Offer: ${JSON.stringify(ofr)}`);
      this.localPeerConnection.setLocalDescription(ofr)
      .then(() => console.log("Local setLocalDescription successfully"))
      .catch(err => console.log("Error Local setLocalDescription: " + err));
      console.info("Offer Created Successfully");
      this.Creator = true;
      let model = new OfferAnswerClass();
      model.mysdp = ofr;
      model.username = this.tokenService.getUserName();
      this.notif.SendOffer(JSON.stringify(model)); // Sending offer
    })
    .catch(error => {
      alert(error);
    });
  }
  private subscribeToEvents(): void{

    this.notif.OfferReceived.subscribe((offer: string) => {
      this.ngZone.run(() => {
        if(!this.Creator){
        this.ReceivedOffer = offer;
        console.log("Offer Received successfully.");
        this.GotOffer(offer);
        $('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
        }
      });
    },(error: any) => {
      alert("Received offer error: " + error);
    },() => {});
    this.notif.AnswerReceived.subscribe((ans: string) => {
      this.ngZone.run(() => {
        if(!!this.Creator){
          console.log("Answer received successfully.");
          this.GotAnswer(ans);
        }
      });
    });

    this.notif.IceCandidateReceived.subscribe((candidate: any) => {
      this.ngZone.run(() => {
        debugger;
        let model = JSON.parse(candidate);
        if(model.side == "Local"){
          window.remotePeerConnection?.addIceCandidate(model);
        }else{
          window.localPeerConnection?.addIceCandidate(model);
        }
      });
    });

    this.notif.connectionEstablished.subscribe((isConnected: Boolean) => {
      this.ngZone.run(() => {
        this.connectionClass = isConnected == true ? "btn-success" : "btn-danger";
      });
    });
  }
  public GotOffer(offer: string){
    let model = new OfferAnswerClass();
    model = JSON.parse(offer);
    this.remotePeerConnection = new RTCPeerConnection(this.conf);
    // navigator.mediaDevices.getUserMedia({ video: true, audio:  false })
    // .then((stream: MediaStream) => {
    //   stream.getTracks().forEach((track: MediaStreamTrack) => {
    //     window.remotePeerConnection.addTrack(track);
    //    });
    // });
    this.remotePeerConnection.ontrack = this.onremotetrack;
    this.remotePeerConnection.setRemoteDescription(model.mysdp)
    .then(() => console.log("Remote setRemoteDescription successfully"))
    .catch(err => console.log("Error Remote setRemoteDescription: " + err));
    this.remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
    this.remotePeerConnection.createAnswer()
    .then(ans => {
      console.log(`Remote Description OR Answer: ${JSON.stringify(ans)}`);
      console.log("Answer Created successfully");
      this.remotePeerConnection.setLocalDescription(ans)
      .then(() => console.log("Remote setLocalDescription successfully"))
      .catch(err => console.log("Error Remote setLocalDescription: " + err));
      let m = new OfferAnswerClass();
      m.mysdp = ans;
      m.username = this.tokenService.getUserName();
      this.notif.SendAnswer(JSON.stringify(m));
    })
  }
  public GotAnswer(answer: string){
    let model = new OfferAnswerClass();
    model = JSON.parse(answer);
    this.localPeerConnection.setRemoteDescription(model.mysdp)
    .then(() => console.log("Local setRemoteDescription successfully"))
    .catch(error => console.log("Error Local setRemoteDescription: " + error));
  }
  public gotLocalCandidate(event: any){
    //debugger;
    console.log("Local Ice Callback");
    console.log('Local ICE Candidate: \n' + JSON.stringify(event.candidate));
    //event.side = "Local";
    console.log(JSON.stringify(this.notif));
    //this.notif.SendOnIceCandidate(JSON.stringify(event));
    console.log("Local Candidate send successfully");
    console.log("Local Candidate iceGatheringState: " + event.target.iceGatheringState);
    // if (event.candidate){
    //   window.remotePeerConnection?.addIceCandidate(event.candidate);
    //   console.log('Local ICE Candidate: \n' + JSON.stringify(event.candidate));
    // }
  }
  gotRemoteIceCandidate(event: any){
    debugger;
    console.log("Remote Ice Callback");
    //event.side = "Remote";
    //this.notif.SendOnIceCandidate(JSON.stringify(event));
    // if (event.candidate){
    //   window.localPeerConnection?.addIceCandidate(event.candidate);
    //   console.log('Remote ICE candidate: \n ' + JSON.stringify(event.candidate));
    // }
    console.log("Remote Candidate iceGatheringState: " + event.target.iceGatheringState);
  }
  onremotetrack(data: RTCTrackEvent){
    debugger;
  }
  onlocaltrack(data: RTCTrackEvent){
    debugger;
  }
  private startHttpRequest(){
    this.http.get(environment.apiUrl + "Notification/Get")
    .subscribe(res => {
      console.log(res);
    });
  }
  ngOnDestroy(): void {
    this.notif.CloseConnection();
  }
}
