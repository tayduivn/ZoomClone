import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Job } from './../../models/job';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { BaseCrudApi } from 'src/app/admin/models/base-view-model';
import { Router } from '@angular/router';
import { delay, takeUntil } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent extends BaseCrudApi<Job> implements OnInit , OnDestroy {
  job: Job = new Job();
  constructor(private jobService: JobService,private router: Router) 
  { 
    super();
  }
  ngOnInit(): void {
   this.getItems();
  }
  getItems(page: number = 1){
    this.isLoading = true;
    this.jobService.getJobs(page,this.query)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      if(res.isSuccess){
        this.items = res.listModel!,
        this.pager = res.pager
      }else{
        this.isError = true;
        this.errorMessage = res.message;
      }
    },
    (error: HttpErrorResponse) => {
      debugger;
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
    },
    () => {
      this.isLoading = false;
      if(this.pager != undefined && this.pager.currentPage > 0){
        this.runIT();
      }
    })
  }
  reset(){
    this.query = '';
    this.getItems();
  }
  onSubmitForm(form: NgForm){
    this.jobService.createJob(this.job)
    .subscribe(res => {
      if(res.isSuccess){
        // Make notification to user for saving data
        debugger;
      }
    },
    (error: HttpErrorResponse) => {
      debugger;
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
    },
    () => {
      this.isLoading = false;
      form.reset();
      //$('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
      this.getItems();
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();    
  }

}
