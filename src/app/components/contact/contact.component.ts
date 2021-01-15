import { off } from 'process';
import { TokenService } from 'src/app/admin/services/token.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { OfferAnswerClass } from 'src/app/models/job';
import { NotifService } from 'src/app/services/notif.service';
import { environment } from 'src/environments/environment.prod';
declare var $: any;
const PEER_CONNECTION_CONFIG: any = {
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
  constructor(
    private notif: NotifService,
    private http: HttpClient,
    private ngZone: NgZone,
    private tokenService: TokenService)
  {
    
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.subscribeToEvents();
  }
  startCon(){
    this.notif.startConnection();
    this.notif.registerOnServerEvents();
  }
  sendOffer(){
    window.localPeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    navigator.mediaDevices.getUserMedia({ video: true, audio:  false })
    .then((stream: MediaStream) => {
      stream.getTracks().forEach((track: MediaStreamTrack) => {
        window.localPeerConnection.addTrack(track);
       });
    });
    window.localPeerConnection.ontrack = this.onlocaltrack;
    window.localPeerConnection.onicecandidate = this.gotLocalCandidate;
    window.localPeerConnection.createOffer()
    .then((ofr) => {
      window.localPeerConnection.setLocalDescription(ofr)
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

    this.notif.connectionEstablished.subscribe((isConnected: Boolean) => {
      this.ngZone.run(() => {
        this.connectionClass = isConnected == true ? "btn-success" : "btn-danger";
      });
    });
  }
  public GotOffer(offer: string){
    let model = new OfferAnswerClass();
    model = JSON.parse(offer);
    window.remotePeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    navigator.mediaDevices.getUserMedia({ video: true, audio:  false })
    .then((stream: MediaStream) => {
      stream.getTracks().forEach((track: MediaStreamTrack) => {
        window.remotePeerConnection.addTrack(track);
       });
    });
    window.remotePeerConnection.ontrack = this.onremotetrack;
    window.remotePeerConnection.setRemoteDescription(model.mysdp)
    .then(() => console.log("Remote setRemoteDescription successfully"))
    .catch(err => console.log("Error Remote setRemoteDescription: " + err));
    window.remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
    window.remotePeerConnection.createAnswer()
    .then(ans => {
      console.log("Answer Created successfully");
      window.remotePeerConnection.setLocalDescription(ans)
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
    window.localPeerConnection.setRemoteDescription(model.mysdp)
    .then(() => console.log("Local setRemoteDescription successfully"))
    .catch(error => console.log("Error Local setRemoteDescription: " + error));
  }
  gotLocalCandidate(event: any){
    console.log("Local Ice CallBack");
    debugger;
    if (event.candidate){
      window.remotePeerConnection?.addIceCandidate(event.candidate);
      console.log('Local ICE Candidate: \n' + event.candidate.candidate);
    }
    if(event.target.iceGatheringState == "complete"){
      console.log("Local Candidate iceGatheringState: " + event.target.iceGatheringState);
    }
  }
  gotRemoteIceCandidate(event: any){
    debugger;
    console.log("Remote Ice Callback");
    if (event.candidate){
      window.localPeerConnection?.addIceCandidate(event.candidate);
      console.log('Remote ICE candidate: \n ' + event.candidate.candidate);
    }
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
