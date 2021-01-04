import { AfterViewInit, Component, OnInit } from '@angular/core';
const PEER_CONNECTION_CONFIG: RTCConfiguration = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" }
  ]
};
@Component({
  selector: 'app-rtccon',
  templateUrl: './rtccon.component.html',
  styleUrls: ['./rtccon.component.css']
})
export class RtcconComponent implements OnInit {
  rtc: RTCPeerConnection | undefined;
  dc!: RTCDataChannel;
  localDescription: string | undefined;
  LDescription!: RTCSessionDescription | null;
  iceServers: RTCConfiguration | undefined;
  iceServerArray!: RTCIceServer[];
  iceServer!: RTCIceServer;
  constructor() { }
   ngOnInit(): void {
    this.rtc = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    this.dc = this.rtc.createDataChannel("channel");
    this.createOffer();
    this.dc.onmessage = this.onmessage;
    this.dc.onopen = this.onopen;
    this.dc.onclose = this.onclose;
    this.rtc.onicecandidate = this.onIceCandidate;
    this.rtc.oniceconnectionstatechange = this.oniceconnectionstatechange;
    this.rtc.ontrack = this.gotRemoteStream;
    this.rtc.onnegotiationneeded = this.onnegotiationneeded;


  }


  public createOffer(){
    this.rtc?.createOffer()
    .then(offer => {
      this.setLocalDescription(offer);
    })
    .catch(error => {
      alert(error);
    });
  }
  public setLocalDescription(offer: any){
    this.rtc?.setLocalDescription(offer)
    .then(LD => {
      this.localDescription = JSON.stringify(offer);//JSON.stringify(this.rtc?.localDescription);
    })
    .catch(error => {
      alert(error);
    });
  }
  public setRemoteDescription(answer: any){
    this.rtc?.setRemoteDescription(answer);
  }
  public sendToServerLocalDescription(){

  }
  public gotRemoteStream(Event: any){
    console.log("ontrack");
  }
  public onIceCandidate(event: RTCPeerConnectionIceEvent){
    console.log("onIceCandidate " + JSON.stringify(event));
  }
  public oniceconnectionstatechange(Event: any){
    console.log("oniceconnectionstatechange");
  }
  public onnegotiationneeded(Event: any){
    console.log("onnegotiationneeded");
  }
  public onopen(event: any){
    console.log("Connection Opened.")
  }
  public onclose(event: any){
    console.log("Connection Closed.");
  }
  public onmessage(event: any){
    debugger;
    console.log(JSON.stringify(event));
  }
}
