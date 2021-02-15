import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Job } from './../../models/job';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';
import { BaseCrudApi, Roles } from 'src/app/models/BaseViewModel';
import { TokenService } from 'src/app/services/user/token.service';
import { UserService } from 'src/app/services/user/users.service';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    private message: NzMessageService,
    private toastrService: ToastrService) 
  { 
    super();
    this.allowedRoles = this.tokenService.getUserRoles();
    this.allowedRoles.forEach(r => {
      if(r === Roles.Administrator){
        this.role = Roles.Administrator;
      }
    });
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
    (error: HttpErrorResponse) => { this.HandleError(error); },
    () => { this.HandleCompletion(); })
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
    (error: HttpErrorResponse) => { this.HandleError(error) },
    () => { 
      this.HandleCompletion(true);
      form.reset(); 
      this.getItems();
    });
  }
  onAcceptorSubmitForm(){
    this.isAcceptingLoading = true;
    this.jobService.acceptJob(this.job)
    .subscribe(res => {
      if(res.isSuccess){
        // Make notification to user for saving data
        this.isAccepted = true;
        this.message.success(`Request accepted successfully.`);
      }else{
        this.message.error(`${res.message}`);
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
  confirmAccept(jobid: number){
    this.isAccepted = false;
    this.job.jobID = jobid;
    this.onAcceptorSubmitForm();
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
