import { TokenService } from './../admin/services/token.service';
import { Job } from './../models/job';
import { BaseViewModel } from './../admin/models/base-view-model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient, private tokenService: TokenService) { }
  
  public getJobs(page: number = 1, query: string = ''): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/GetJobs?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<Job>>(url);
  }
  public createJob(job: Job): Observable<BaseViewModel<Job>>
  {
    let url = `${environment.apiUrl}Job/Create`;
    job.postedBy = this.tokenService.getUserName();
    job.createdAt = new Date();
    job.isAvailable = true;
    return this.http.post<BaseViewModel<Job>>(url, job);
  }
  public getIceServers(): Observable<RTCIceServer[] | undefined>
  {
    let url = `${environment.apiUrl}Notification/Get`;
    return this.http.get<RTCIceServer[] | undefined>(url);
  }
}
