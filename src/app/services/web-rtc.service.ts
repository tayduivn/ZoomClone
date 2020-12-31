import { ElementRef, Injectable, NgZone, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRTCService {
  public connection!: RTCPeerConnection;
  @ViewChild('screenvideo') screenvideo!: ElementRef<HTMLVideoElement>;
  // Screen Share //
  // public _screenTrack: MediaStreamTrack | undefined;
  // public _screenStream: MediaStream | undefined;
  public _screenTrack: any;
  public _screenStream: any;
  public btnScreenShare: string = '';
  public btnScreenShareColor: string = '';
  public ngZone: NgZone | undefined;
  // Screen Share //
  constructor(ngZone: NgZone) {
    this.ngZone = ngZone;
   }
  public createConnection()
  {
    console.log('createConnection');
    this.connection = new RTCPeerConnection();
    debugger;
  }
  public createOffer(): void 
  {
    debugger;
    var offer = this.connection.createOffer();
    // this.connection.setLocalDescription(offer)
    // .then(z => console.log(z));
    console.log('localDescription ', this.connection.localDescription);
     //Send offer to Server
     //hub.server.send(JSON.stringify({ 'offer': connection.localDescription }));
  }
  public StartStopScreenShare(){
    if(this._screenTrack){
      this._screenTrack.stop();
      this._screenTrack = undefined;
      this.btnScreenShare = 'Share Screen';
      return;
    }
    const mediaDevices = navigator.mediaDevices as any;
    var sc_stream = mediaDevices.getDisplayMedia({
      audio: false,
      video: {frameRate: 1},
    })
    .then((stream: any) => {
      this._screenStream = stream;
      if(this._screenStream && this._screenStream.getVideoTracks().length > 0){
        debugger;
        this.screenvideo.nativeElement.srcObject = this._screenStream;
        this.screenvideo.nativeElement.play();
      }




      // this.ngZone.run(()=>{
      //   this.btnScreenShare = "On Activate";
      //   this.btnScreenShareColor = 'text-success';
      // });
      // this._screenStream.oninactive = (eee: any) => {
      //   this.ngZone.run(() => {
      //     this.btnScreenShare = "On in active";
      //     this.btnScreenShareColor = 'text-danger';
      //   });
      //}
      // debugger;
      // console.log(stream);
      // console.log(this._screenStream);
    }).catch((error: any) => {
       console.log(error);
    });
  }
  
}
