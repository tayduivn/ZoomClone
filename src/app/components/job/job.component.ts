import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../admin/services/user.service';
import { TokenService } from 'src/app/admin/services/token.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Job } from './../../models/job';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { BaseCrudApi } from 'src/app/admin/models/base-view-model';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent extends BaseCrudApi<Job> implements OnInit , OnDestroy {
  job: Job = new Job();
  isAccepted: boolean = false;
  isAcceptingLoading: boolean = false;
  dataUser: any[] = [];
  keyword = "name";
  previousUserName = "";
  isAssignedSuccessfully = false;
  constructor(private jobService: JobService,private router: Router, private tokenService: TokenService,
    private userService: UserService,
    private toastrService: ToastrService) 
  { 
    super();
    this.allowedRoles = this.tokenService.getUserRoles();
  }
  ngOnInit(): void {
   this.getItems();
  }
  getItems(page: number = 1){
    this.isLoading = true;
    this.add = this.jobService.getJobs(page,this.query)
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
  // * Forms Submissions
  onSubmitForm(form: NgForm){
    this.jobService.createJob(this.job)
    .subscribe(res => {
      if(res.isSuccess){
        // Make notification to user for saving data
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
  onAcceptorSubmitForm(form: NgForm){
    this.isAcceptingLoading = true;
    this.jobService.acceptJob(this.job)
    .subscribe(res => {
      if(res.isSuccess){
        // Make notification to user for saving data
        this.isAccepted = true;
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
      this.isAcceptingLoading = false;
    },
    () => {
      this.isAcceptingLoading = false;
      form.reset();
      //$('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
      this.getItems();
    });
  }
  onAssignationSubmitForm(form: NgForm){
    this.isAcceptingLoading = true;
    this.jobService.assignJob(this.job)
    .subscribe(res => {
      if(res.isSuccess){
        // Make notification to user for saving data
        this.isAssignedSuccessfully = true;
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
      this.isAcceptingLoading = false;
    },
    () => {
      this.isAcceptingLoading = false;
      form.reset();
      //$('#modal_aside_left').modal('toggle'); //or  $('#IDModal').modal('hide');
      this.getItems();
    });
  }
  // * Forms Submissions
  showAcceptanceModal(jobid: number){
    this.isAccepted = false;
    this.job.jobID = jobid;
    $("#acceptenceJobModal").modal('show');
  }
  showassignationModal(jobid: number, previousAcceptedBy: string){
    this.isAssignedSuccessfully = false;
    if(previousAcceptedBy !== null){
      this.previousUserName = previousAcceptedBy;
    }else{
      this.previousUserName = "Assign fresh request...";
    }
    this.job.jobID = jobid;
    $("#assignationModal").modal('show');
  }
  // * User Auto Search
  selectEventUser(item: any) {
    this.job.acceptedBy = item.name;
    // do something with selected item
  }
  onChangeSearchUser(val: string) {
    this.userService.SearchUsers(val)
    .subscribe(res => {
      this.dataUser = res;
    })
  }
// * User Auto Search

  ngOnDestroy(): void {
    this.dispose();
  }

}
