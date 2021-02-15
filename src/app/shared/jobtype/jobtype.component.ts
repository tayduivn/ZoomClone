import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobtype',
  templateUrl: './jobtype.component.html',
  styleUrls: ['./jobtype.component.css']
})
export class JobtypeComponent {

  @Input() set jobType(stateInt: number){
    this.getJobType(stateInt);
  }

  public jobstatus: string = "";
  public badgeClass: string = "";
  constructor() { }
  private getJobType(jobStatus: number): void{
    switch(jobStatus){
      case 0:
        this.jobstatus = "Online";
        this.badgeClass = "badge-success";
        break;
      case 1:
        this.jobstatus = "Offline";
        this.badgeClass = "badge-warning";
        break;
      default:
        this.jobstatus = "";
        this.badgeClass = "";
    }
  }

}
