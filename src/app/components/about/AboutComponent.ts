import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
declare var MediaRecorder: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('screenvideo') screenvideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('audioCtr') audioCtr!: ElementRef<HTMLAudioElement>;
  _myMediaStream: any;
  _recordedChunks = [];
  _mediaRecorder: any;
  _audioTrack: any;
  width: number = 200;
  height: number = 220;
  public unsubscribe$ = new Subject<void>();
  public _screenTrack: any;
  public _screenStream: any;
  public btnScreenShare: string = '';
  public btnScreenShareColor: string = '';
  constructor(private ngZone: NgZone){
    //super(ngZone);
  }

  ngAfterViewInit(){
      //this.setAudioVideo();
      //this.webRTCService.createConnection();
      //this.webRTCService.createOffer();
      //this.startWithAudio();
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
      audio: true,
      video: {frameRate: 1},
    })
    .then((stream: any) => {
      this._screenStream = stream;
      debugger;
      if(this._screenStream && this._screenStream.getVideoTracks().length > 0){
        debugger;
        //this._screenTrack = this._screenStream.getVideoTracks()[0];
        this.screenvideo.nativeElement.srcObject = this._screenStream;//new MediaStream([this._screenTrack]);
        //this.screenvideo.nativeElement.play();
      }

      this.ngZone.run(()=>{
        this.btnScreenShare = "On Activate";
        this.btnScreenShareColor = 'text-success';
      });
      this._screenStream.oninactive = (eee: any) => {
        debugger;
        // stop both video and audio
      this._screenStream.getTracks().forEach((track: any) => {
        debugger;
        track.stop();
        console.log(track.id);
        console.log(track);
      });
      this._screenStream = undefined;
        this.ngZone.run(() => {
          this.btnScreenShare = "On in active";
          this.btnScreenShareColor = 'text-danger';
        });
      }
    }).catch((error: any) => {
       console.log(error);
    });
  }
  public setupMediaRecorder(stream: any){
    debugger;
    var recordedChunks = [];
    this._mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    this._mediaRecorder.ondataavailable = (e: any) => {
      console.log(e.data.size);
      if(e.data.size > 0)
          recordedChunks.push(e.data);
  };
  this._mediaRecorder.onstart = async () => {
    console.log("On start");
  };
    this._mediaRecorder.onpause = async () => {
      console.log("On pause");
    };
    this._mediaRecorder.onresume = async () => {
      console.log("On resume");
    };
  }
  public startWithAudio(){
    this._myMediaStream = navigator.mediaDevices.getUserMedia({ video: false, audio:  true })
    .then((stream) => {
      debugger;
      this._audioTrack = stream.getAudioTracks()[0];
      this._audioTrack.onmute = (e: any) => {
        debugger;
        console.log("Muting Audio Track");
      };
      this._audioTrack.onunmute = (e: any) => {
        this.ngZone.run(()=>{
          debugger;
          console.log("Unmuting Audio Track");
          this.btnScreenShare = "Unmuting";
        });
      };
      this.audioCtr.nativeElement.srcObject = stream;
      this.setupMediaRecorder(stream);
    })
    .catch(error => {
      alert(error);
    });


  }
  onClickMe() {
    this.setAudioVideo();
  }
  setAudioVideo(){
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      alert("This browser does not support the API yet");
      return;
    }
    navigator.mediaDevices.getUserMedia({ 
      audio: false,
      video: { width: this.width, height: this.height }
     })
    .then((stream) => {
      this._myMediaStream = stream;
      this.video.nativeElement.srcObject = stream;
      this.video.nativeElement.play();
    })
    .catch((err) => {
      alert(err);
  });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete(); 
    // stop both video and audio
    // if (this._myMediaStream.active) {
    //   debugger;
    //   this._myMediaStream.getTracks().forEach((track: MediaStreamTrack) => {
    //     track.stop();
    //   });
    //   this._myMediaStream = null;
    // }  
    console.log('About Destroyed . . . .');
  }


}
