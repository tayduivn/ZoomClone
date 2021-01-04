import { Component, OnInit } from '@angular/core';
const PEER_CONNECTION_CONFIG: RTCConfiguration = {
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun.l.google.com:19302" }
  ]
};
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  rtc: RTCPeerConnection | undefined;
  dc!: RTCDataChannel;
  localDescription: string | undefined;
  Answer: string | undefined;
  LDescription!: RTCSessionDescription | null;
  iceServers: RTCConfiguration | undefined;
  iceServerArray!: RTCIceServer[];
  iceServer!: RTCIceServer;
  VarAnswer: any;
  //  kv3: RTCSessionDescriptionInit = {
  //   sdp: `this.VarAnswer`,
  //   type: "offer"
  // };
  constructor() { }

  ngOnInit(): void {
    // this.rtc = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    // this.rtc.onicecandidate = this.onIceCandidate;
    // this.rtc.ondatachannel = this.ondatachannel;
  }

  setOfferr(){
    //this.rtc?.
    debugger;
    console.log(this.rtc?.signalingState);
    this.rtc?.setRemoteDescription(this.kv3)
    .then(x => console.log("Set Remote Description Successfully"))
    .then(x => this.createAnswer())
    .catch(error => {
      console.error(error + "Error on Remote Description");
      alert(error);
    });
  }



  public createAnswer(){
    this.rtc?.createAnswer()
    .then(answer => console.log("Remote: Answer created successfully"))
    .then(ans => this.Answer =  JSON.stringify(ans))
    .then(ans => this.setLD(ans))
    .catch(error => {
      alert(error);
    })
  }
  private setLD(ans: any){
    debugger;
    this.rtc?.setLocalDescription(ans)
      .then(x => console.log("Remote:  Local Description set successfully"))
      .catch(error => alert(error))
  }
  public ondatachannel(event: any){
    debugger;
  }
  public gotRemoteStream(Event: any){
    console.log("ontrack");
  }
  public onIceCandidate(event: RTCPeerConnectionIceEvent){
    console.log("onIceCandidate " + JSON.stringify(this.rtc?.localDescription));
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
