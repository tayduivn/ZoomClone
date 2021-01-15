import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//RTCConfiguration
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
var d: RTCSessionDescriptionInit = {
  sdp: '',
  type: "offer"
};
function cll(){
  return document.getElementById("remoteid");
}
declare global {
  interface Window {
    localPeerConnection: RTCPeerConnection;
    remotePeerConnection: RTCPeerConnection;
    sendChannel: RTCDataChannel;
    receiveChannel: RTCDataChannel;
  }
}
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit , AfterViewInit {

  issendChannelConnectionOpen: boolean = false;
  isreceivingChannelConnectionOpen: boolean = false;
  @ViewChild('sendingTextt') sendingTextt!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('receivingTextt') receivingTextt!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('localvid') localvid!: ElementRef<HTMLVideoElement>;
  @ViewChild('remotevid') remotevid!: ElementRef<HTMLVideoElement>;
  public localPeerConnection!: RTCPeerConnection;
  public stream!: MediaStream;
  
  //public remotePeerConnection!: RTCPeerConnection;
  //public sendChannel!: RTCDataChannel;
  //public receiveChannel!: RTCDataChannel;
  //constraints: MediaStreamConstraints = { audio: true, video: false };
  constructor() {
  }
  ngOnInit(): void {
    // this.rtc = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    // this.rtc.onicecandidate = this.onIceCandidate;
    // this.rtc.ondatachannel = this.ondatachannel;
  }
  ngAfterViewInit() {
    // const mediaDevices = navigator.mediaDevices as any;
    //window.localPeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);

    // this.Trace("Created Local Peer Connection Object localPeerConnection");
    // var sc_stream = mediaDevices.getUserMedia({ video: true, audio:  true })
    // .then((stream: MediaStream) => {
    //   // stream.getTracks().forEach((track: MediaStreamTrack) => {
    //   //   debugger;
    //   //   window.localPeerConnection.addTrack(track);
    //   // });
    //   window.localPeerConnection.addTrack(stream.getVideoTracks()[0], stream);
    //   this.localvid.nativeElement.srcObject = stream;
    //   this.localvid.nativeElement.play();
    // });
    //debugger;
    //console.log(sc_stream);
  }
  public Trace(text: string){
    console.log((performance.now() / 1000).toFixed(3) + ": " + text);
  }
  createConnection(): void{
    debugger;
    // ? Local
     try{
    window.localPeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    window.sendChannel = window.localPeerConnection?.createDataChannel("sendDataChannel");
    this.Trace("Created send data channel");
     }catch(e){
       alert('Failed to create data channel. ' +
       'You need Chrome M25 or later with RtpDataChannel enabled');
       this.Trace("createDataChannel() failed with exception: " + e.message);
     }
    window.localPeerConnection.onicecandidate = this.gotLocalCandidate;
    window.sendChannel.onmessage = this.handleLocalMessage;
    window.sendChannel.onopen = this.handleSendChannelStateChange;
    window.sendChannel.onclose = this.handleSendChannelStateChange;
    window.localPeerConnection.oniceconnectionstatechange = this.Localoniceconnectionstatechange;
    // ? Remote
    window.remotePeerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);
    console.log("Created Remote Peer Connection Object remotePeerConnection");
    window.remotePeerConnection.ontrack = this.onremotetrack;
    window.remotePeerConnection.onicecandidate = this.gotRemoteIceCandidate;
    window.remotePeerConnection.ondatachannel = this.gotReceiveChannel;
    window.remotePeerConnection.oniceconnectionstatechange = this.Remoteoniceconnectionstatechange;

    window.localPeerConnection.createOffer()
    .then(LD => {
      console.log(`Local Description OR Offer: ${JSON.stringify(LD)}`);
      this.gotLocalDescription(LD)
    })
    .catch(err => this.Trace("Error: " + err));
  }
  onremotetrack(data: RTCTrackEvent){
    debugger;
    if(data.streams.length > 0){
      //this.remotevid.nativeElement.srcObject = data.streams[0];
      //this.remotevid.nativeElement.play();
      //this.attach(data.streams[0])
      //cll().src = window.URL.createObjectURL(data.streams[0]);
    }
  }
  attach(data: MediaStream){
    debugger;
    this.remotevid.nativeElement.srcObject = data;
    this.remotevid.nativeElement.play();
  }
  sendData(){
    debugger;
    try{
      window.sendChannel.send(this.sendingTextt.nativeElement.value);
      console.log("Sent data: " + this.sendingTextt.nativeElement.value);
    }catch(e){
      console.log("Error: " + e.message);
      console.log("Send Channel Ready State: " + window.sendChannel.readyState);
      console.log("Received Channel Ready State: " + window.receiveChannel.readyState);
    }
  }
  SendReceiveData(){
    debugger;
    try{
      window.receiveChannel.send(this.receivingTextt.nativeElement.value);
      console.log("Sent data: " + this.receivingTextt.nativeElement.value);
      //alert(": " + this.sendingTextt.nativeElement.value);
    }catch(e){
      console.log("Error: " + e.message);
      console.log("Send Channel Ready State: " + window.sendChannel.readyState);
      console.log("Received Channel Ready State: " + window.receiveChannel.readyState);
    }
  }
  gotRemoteIceCandidate(event: any){
    debugger;
    console.log("Remote Ice Callback");
    if (event.candidate){
      window.localPeerConnection?.addIceCandidate(event.candidate);
      console.log('Remote ICE candidate: \n ' + event.candidate.candidate);
    }
    if(event.target.iceGatheringState == "complete"){
      // ! Create Offer and send to server or other peer
      console.log("Remote Candidate iceGatheringState: " + event.target.iceGatheringState);
    }
  }
  gotReceiveChannel(event: RTCDataChannelEvent){
    debugger;
    window.receiveChannel = event.channel;
    // window.receiveChannel.addEventListener("message",function(message){
    //   debugger;
    //   if(message.data instanceof Blob) {} else {}
    //   console.log("Remote Message: " + message.data);
    // });
    window.receiveChannel.addEventListener("message",function(e){
      debugger;
      alert("Received: " + e.data)
    });
    window.receiveChannel.addEventListener("open",function(){
      debugger;
      console.log("Remote Connection Open");
    });
    window.receiveChannel.addEventListener("close",function(){
      debugger;
      console.log("Remote Connection Closed");
    });
    //window.receiveChannel.onopen = this.handleReceiveChannelStateChange;
    //window.receiveChannel.onclose = this.handleReceiveChannelStateChange;
    console.log("Receive Channel Callback");
  }
  public handleRemoteMessage(event: MessageEvent){
    debugger;
    console.log('Received message: ' + event.data);
    this.receivingTextt.nativeElement.value = event.data;
  }
  handleLocalMessage(event: MessageEvent){
    debugger;
    alert('Sent message: ' + event.data);
    //this.receivingTextt.nativeElement.value = event.data;
    this.issendChannelConnectionOpen = true;
  }
  handleSendChannelStateChange(){
    debugger;
    console.log("Send channel state is: " + window.sendChannel.readyState);
    if(window.sendChannel.readyState == "open"){
      console.log("Send channel state is: open");
      this.issendChannelConnectionOpen = true;
    }else{
      console.log("Send channel state is: " + window.sendChannel.readyState);
    }
  }
  handleReceiveChannelStateChange(){
    debugger;
    console.log('Receive channel state is: ' + window.receiveChannel.readyState);
    this.isreceivingChannelConnectionOpen = true;
  }
  gotLocalCandidate(event: any){
    console.log("Local Ice CallBack");
    debugger;
    if (event.candidate){
      window.remotePeerConnection?.addIceCandidate(event.candidate);
      console.log('Local ICE Candidate: \n' + event.candidate.candidate);
    }
    if(event.target.iceGatheringState == "complete"){
      // ! Create Offer and send to server or other peer
      console.log("Local Candidate iceGatheringState: " + event.target.iceGatheringState);
    }
  }
  gotLocalDescription(desc: any){
    debugger;
    window.localPeerConnection?.setLocalDescription(desc);
    console.log('Offer from LocalPeerConnection \n' + JSON.stringify(desc.sdp));
    window.remotePeerConnection.setRemoteDescription(desc);
    window.remotePeerConnection?.createAnswer()
    .then(RD => {
      console.log(`Remote Description OR Answer: ${JSON.stringify(RD)}`);
      this.gotRemoteDescription(RD)
    })
    .catch(err => this.Trace("Error: " + err));
  }
  gotRemoteDescription(desc: any){
    debugger;
    window.remotePeerConnection?.setLocalDescription(desc);
    console.log('Answer from remotePeerConnection \n' + JSON.stringify(desc.sdp));
    window.localPeerConnection?.setRemoteDescription(desc);

  }
  public Localoniceconnectionstatechange(Event: any){
    debugger;
    console.log("Local oniceconnectionstatechange: " + Event.target.iceConnectionState);
  }
  public Remoteoniceconnectionstatechange(Event: any){
    debugger;
    console.log("Remote oniceconnectionstatechange: " + Event.target.iceConnectionState);
  }
  closeDataChannels(){
    debugger;
    window.sendChannel.close();
    window.receiveChannel?.close();
    window.localPeerConnection?.close();
    window.remotePeerConnection?.close();
    this.issendChannelConnectionOpen = false;
    this.isreceivingChannelConnectionOpen = false;
  }





























































  // setOfferr(){
  //   var t  = this.maybeAddLineBreakToEnd(this.VarAnswer);
  //   d.sdp = this.VarAnswer;//t.replace(/\n/g, '\r\n');
  //   console.log(d.sdp);
  //   debugger;
  //   console.log(this.rtc?.signalingState);
  //   console.log(this.VarAnswer);
  //   this.rtc?.setRemoteDescription(d)
  //   .then(x => console.log("Set Remote Description Successfully"))
  //   //.then(x => this.createAnswer())
  //   .catch(error => {
  //     console.error(error + "Error on Remote Description");
  //     alert(error);
  //   });
  // }
  public maybeAddLineBreakToEnd(sdp: any) {
    var endWithLineBreak = new RegExp(/\n$/);
    if (!endWithLineBreak.test(sdp)) {
        return sdp + '\n';
    }
    return sdp;
  }
  // public createAnswer(){
  //   this.rtc?.createAnswer()
  //   .then(answer => console.log("Remote: Answer created successfully"))
  //   .then(ans => this.Answer =  JSON.stringify(ans))
  //   .then(ans => this.setLD(ans))
  //   .catch(error => {
  //     alert(error);
  //   })
  // }
  // private setLD(ans: any){
  //   debugger;
  //   this.rtc?.setLocalDescription(ans)
  //     .then(x => console.log("Remote:  Local Description set successfully"))
  //     .catch(error => alert(error))
  // }
  public ondatachannel(event: any){
    debugger;
  }
  public gotRemoteStream(Event: any){
    console.log("ontrack");
  }
  public onIceCandidate(event: RTCPeerConnectionIceEvent){
    //console.log("onIceCandidate " + JSON.stringify(this.rtc?.localDescription));
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
