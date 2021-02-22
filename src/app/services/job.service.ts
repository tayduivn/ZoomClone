import { Job } from './../models/job';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { retryWhen, delay, scan, map, catchError } from 'rxjs/operators';
import { TokenService } from './user/token.service';
import { BaseViewModel } from '../models/BaseViewModel';
import { BaseService } from './BaseService';

@Injectable({
  providedIn: 'root'
})
export class JobService extends BaseService {
  constructor(private http: HttpClient, private tokenService: TokenService) { super(); }

  public getJobs(page: number = 1, query: string = ''): Observable<BaseViewModel<Job>> {
    let url = `${environment.apiUrl}Job/GetJobs?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<Job>>(url)
      .pipe(
        map(res => {
          res.listModel?.forEach(j => {
            j.duration = this.GetDuration(j.startDateTime, j.endDateTime);
          })
          return res;
        }),
        retryWhen(notifier => notifier.pipe(
          delay(3000),
          scan((retryCount) => {
            if (retryCount >= 5) {
              throw notifier;
            } else {
              retryCount++;
              console.log(`Retrying Attempts: ${retryCount}`);
              return retryCount;
            }
          }, 0)
        ))
      );
  }

  public getMyJobs(page: number = 1, query: string = ''): Observable<BaseViewModel<Job>> {
    let url = `${environment.apiUrl}Job/GetMyJobs?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<Job>>(url).pipe(
      map(res => {
        res.listModel?.forEach(j => {
          if (j.acceptedBy === this.tokenService.getUserName()) {
            j.acceptedBy = "You"
          }
          j.duration = this.GetDuration(j.startDateTime, j.endDateTime);
          j!.isPast = new Date(j.endDateTime) < new Date(Date.now());
        });
        return res;
      })
    );
  }

  public getMyJob(jobID: number = 0): Observable<BaseViewModel<Job>> {
    let url = `${environment.apiUrl}Job/GetMyJob?jobID=${jobID}`;
    return this.http.get<BaseViewModel<Job>>(url).pipe(
      map(res => {
        if(res.model != null){
          res.model!.duration = this.GetDuration(res.model?.startDateTime!, res?.model?.endDateTime!);
        }
        return res;
      }),
      catchError(err => this.handleError(err))
    );
  }

  public createJob(job: Job): Observable<BaseViewModel<Job>> {
    let url = `${environment.apiUrl}Job/Create`;
    job.postedBy = this.tokenService.getUserName();
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public acceptJob(job: Job): Observable<BaseViewModel<Job>> {
    let url = `${environment.apiUrl}Job/AcceptJob`;
    job.acceptedBy = this.tokenService.getUserName();
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public assignJob(job: Job): Observable<BaseViewModel<Job>> {
    let url = `${environment.apiUrl}Job/AssignJob`;
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public cancelJob(job: Job): Observable<BaseViewModel<Job>> {
    let url = `${environment.apiUrl}Job/CancelJob`;
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public getIceServers(): Observable<RTCIceServer[] | undefined> {
    let url = `${environment.apiUrl}Notification/Get`;
    return this.http.get<RTCIceServer[] | undefined>(url);
  }
  public isAuthenticateToNavigate(endDateTime: any) {
    let milliSecondsInASecond = 1000;
    let SecondsInAMinute = 60;
    let timeDifference: any = new Date(endDateTime).getTime() - new Date().getTime();
    let secondsToDday: any = Math.floor((timeDifference) / (milliSecondsInASecond) % SecondsInAMinute);
    return (secondsToDday > 0) ? true : false;
  }
  private GetDuration(startTime: any, endTime: any): string {
    var hr = "hour";
    var mint = "minute";

    startTime = new Date(startTime),
      endTime = new Date(endTime)
    var delta = Math.abs(endTime.valueOf() - startTime.valueOf()) / 1000;
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    if (minutes > 1) {
      mint = "minutes";
    }
    if (hours > 1) {
      hr = "hours";
    }
    return `${hours} ${hr} & ${minutes} ${mint}`;
  }
  public GetCorrectDateTime(dateTime: Date): Date
  {
    var DateTime = new Date(dateTime.toString());
    var timeZoneDifference_s = (DateTime.getTimezoneOffset() / 60) * -1;
    DateTime.setTime(DateTime.getTime() + (timeZoneDifference_s * 60) * 60 * 1000);
    return new Date(DateTime.toISOString());
  }
}
