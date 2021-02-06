import { JobService } from 'src/app/services/job.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { BaseCrudApi } from 'src/app/admin/models/base-view-model';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/admin/services/token.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent extends BaseCrudApi<Job> implements OnInit , OnDestroy {

  job: Job = new Job();
  selectedDate: Date = new Date();
  config: any;
  cancelIsLoading = false;
  isCancelled = false;
  constructor(private jobService: JobService,private router: Router, 
    private toastrService: ToastrService,
    private tokenService: TokenService) 
    { 
      super();
      this.allowedRoles = this.tokenService.getUserRoles();
    }

  ngOnInit(): void {
    this.getItems();
  }

  getDate(date: Date): void {
}

getDay(day: number): void {
}

getMonth(month: number): void {
}
  
getMonthName(monthName: string): void {
}

getYear(year: number): void {
}

  onCancelSubmitForm(form: NgForm){
    console.log(JSON.stringify(this.job));
    this.cancelIsLoading = true;
    this.add = this.jobService.cancelJob(this.job)
    .subscribe(res => {
      if(res.isSuccess){
        // Make notification to user for saving data
        this.isCancelled = true;
        debugger;
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      this.cancelIsLoading = false;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
    },
    () => {
      form.reset();
      this.cancelIsLoading = false;
      this.getItems();
    });
  }

  showaCancelModal(jobid: number){
    this.job.jobID = jobid;
    this.isCancelled = false;
    $("#cancelModal").modal('show');
  }

  getItems(page: number = 1){
    this.isLoading = true;
    this.add = this.jobService.getMyJobs(page,this.query)
    .subscribe(res => {
      if(res.isSuccess){
        this.items = res.listModel!,
        this.pager = res.pager
      }else{
        this.isError = true;
        this.errorMessage = res.message;
        this.toastrService.error(res.message,"Error: ");
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
    },
    () => {
      this.isLoading = false;
    })
  }
  reset(){
    this.query = '';
    this.getItems();
  }
  ngOnDestroy(): void {
    this.dispose();
  }
}
