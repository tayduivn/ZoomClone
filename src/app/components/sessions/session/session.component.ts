import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BaseCrudApi } from 'src/app/models/BaseViewModel';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent extends BaseCrudApi<Job> implements OnInit, OnDestroy {
  public SessionID = 0;
  constructor(private activatedroute: ActivatedRoute,
    private jobService: JobService,
    private router: Router,
    private message: NzMessageService) { super(); }

  ngOnInit(): void {
    const SessionID: any = this.activatedroute.snapshot.paramMap.get('id');
    if (!isNaN(SessionID)) {
      this.SessionID = Number(SessionID);
    }
    this.getItem();
  }


  isDisable = true;
  getItem() {
    this.isLoading = true;
    this.add = this.jobService.getMyJob(this.SessionID).subscribe(res => {
      if (res.isSuccess) {
        this.item = res.model!;
        this.isDisable = new Date(this.item.endDateTime) < new Date(Date.now());
        console.log(JSON.stringify(this.item));
        if (!this.jobService.isAuthenticateToNavigate(this.item.endDateTime)) {
          this.router.navigateByUrl("/Logout");
        }
      } else {
        this.message.create('error', res.message?.toString()!, {
          nzDuration: 10000
        });
        this.router.navigateByUrl("/Logout");
      }
    },
      (error: HttpErrorResponse) => {
        this.isError = true;
        this.errorMessage = error.error;
      },
      () => {
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.dispose();
  }
}
