import { TokenService } from './../admin/services/token.service';
import { Job } from './../models/job';
import { BaseViewModel } from './../admin/models/base-view-model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { retryWhen, delay, scan, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient, private tokenService: TokenService) { }
  
  public getJobs(page: number = 1, query: string = ''): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/GetJobs?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<Job>>(url)
    .pipe(
      retryWhen(notifier => notifier.pipe(
        delay(3000),
        scan((retryCount) => {
          if(retryCount >= 5){
            throw notifier;
          }else{
            retryCount++;
            console.log(`Retrying Attempts: ${retryCount}`);
            return retryCount;
          }
        },0)
      ))
    );
  }

  public getMyJobs(page: number = 1, query: string = ''): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/GetMyJobs?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<Job>>(url);
  }
  public createJob(job: Job): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/Create`;
    job.postedBy = this.tokenService.getUserName();
    job.createdAt = new Date();
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public acceptJob(job: Job): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/AcceptJob`;
    job.acceptedAt = new Date();
    job.acceptedBy = this.tokenService.getUserName();
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public assignJob(job: Job): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/AssignJob`;
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public cancelJob(job: Job): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/CancelJob`;
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public getIceServers(): Observable<RTCIceServer[] | undefined>
  {
    let url = `${environment.apiUrl}Notification/Get`;
    return this.http.get<RTCIceServer[] | undefined>(url);
  }
}
