import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from '@angular/core';
declare var MediaRecorder: any;
declare var $: any;
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements AfterViewInit {
  @ViewChild('audioCtr') audioCtr!: ElementRef<HTMLAudioElement>;
  @ViewChild('ankorTag') ankorTag!: ElementRef<HTMLAnchorElement>;
  _myMediaStream: any;
  _recordedChunks: any = [];
  _mediaRecorder: any;
  _audioTrack: any;
  public btnMuteUnmute: string = 'fas fa-microphone-slash';
  public isAudioMute: boolean = true;
  public isRecording: boolean = false;
  public isResume: boolean = true;
  constructor(private ngZone: NgZone) { }
  ngAfterViewInit(): void {
    this.startWithAudio();
    // this.audioCtr.nativeElement.onplay(e =>{
    //   console.log(e);
    // });
  }
  StartRecording(){
    this.isRecording = true;
    if(this._myMediaStream == undefined){
      return;
    }
    this.setupMediaRecorder(this._myMediaStream);
    this._mediaRecorder.start(1000);
  }
  ResumeRecording(){
    debugger;
    if(this._mediaRecorder.state == "inactive"){
      this._mediaRecorder.start();
      return;
    }
    this.isResume = true;
    this._mediaRecorder.resume();
  }
  PauseRecording(){
    debugger;
    if(this._mediaRecorder.state == "inactive"){
      return;
    }
    this.isResume = false;
    this._mediaRecorder.pause();
  }
  StopRecording(){
    this.isRecording = false;
    debugger;
    this._mediaRecorder.stop();
  }
  MuteUnmute(){
    debugger;
    if (!this._audioTrack) return;
    if (this._audioTrack.enabled == false) {
      this.btnMuteUnmute = "fas fa-microphone-slash";
      this._audioTrack.enabled = true;
      this.isAudioMute = true;
    }else{
      this.btnMuteUnmute = "fas fa-microphone";
      this._audioTrack.enabled = false;
      this.isAudioMute = false;
    }
    console.log(this._audioTrack);
  }
  public startWithAudio(){
    navigator.mediaDevices.getUserMedia({ video: false, audio:  true })
    .then((stream) => {
      this._myMediaStream = stream;
      debugger;
      this._audioTrack = stream.getAudioTracks()[0];
      this._audioTrack.onmute = (e: any) => {
        console.log("Muting Audio Track");
      };
      this._audioTrack.onunmute = (e: any) => {
        this.ngZone.run(()=>{
          console.log("Unmuting Audio Track");
        });
      };
      this.audioCtr.nativeElement.srcObject = stream;
      this.setupMediaRecorder(stream);
    })
    .catch(error => {
      alert(error);
    });


  }
  public setupMediaRecorder(stream: any){
    debugger;
    //var recordedChunks = [];
    this._mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
    this._mediaRecorder.ondataavailable = (e: any) => {
      console.log(e.data.size);
      if(e.data.size > 0)
          this._recordedChunks.push(e.data);
  };
  this._mediaRecorder.onstop = async () => {
    debugger;
    var blob = new Blob(this._recordedChunks, { type: 'video/webm' });
    let url = window.URL.createObjectURL(blob);
    this.ankorTag.nativeElement.href = url;
    this.ankorTag.nativeElement.target = '_blank';
    this.ankorTag.nativeElement.download = 'test.weba';
    this.ankorTag.nativeElement.click();
};
  this._mediaRecorder.onstart = () => {
    console.log("On start");
  };
    this._mediaRecorder.onpause = () => {
      console.log("On pause");
    };
    this._mediaRecorder.onresume = () => {
      console.log("On resume");
    };
  }
}
