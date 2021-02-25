import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-coundown',
  templateUrl: './coundown.component.html',
  styleUrls: ['./coundown.component.css']
})
export class CoundownComponent implements OnDestroy {

  constructor(private jobService: JobService){}
  private subscription!: Subscription;
  private sessionID = 0;

  @Input() set SetTime(dd: any) 
  {
    this.startDateTime = new Date(dd);
    this.subscription = interval(1000)
      .subscribe(x => 
      {
        this.getTimeDifference();
      });
  }
  
  @Input() set SessionID(sessionid: number)
  {
    this.sessionID = sessionid;
  }
  public dateNow = new Date();
  public startDateTime = new Date('2021-02-17 15:40:54.9300000');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;
  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;
  public sessionDescription = "";
  public isShowDescription = false;
  private getTimeDifference() {
    this.timeDifference = this.startDateTime.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }
  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    if(this.secondsToDday < 0)
    {
      this.sessionDescription = "Your session has been started";
      this.isShowDescription = true;
      this.jobService.startSessionNowNumber.next(this.sessionID);
      this.subscription.unsubscribe();
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
