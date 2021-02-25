import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sessionchecktime'
})
export class SessionchecktimePipe implements PipeTransform {
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;
  transform(value: any, ...args: unknown[]): boolean
  {
    let timeDifference: any = new Date(value).getTime() - new Date().getTime();
    let secondsToDday: any = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    return (secondsToDday > 0) ? true : false;
  }

}
