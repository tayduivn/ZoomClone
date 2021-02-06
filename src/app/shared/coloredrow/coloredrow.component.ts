import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloredrow',
  templateUrl: './coloredrow.component.html',
  styleUrls: ['./coloredrow.component.css']
})
export class ColoredrowComponent {


  @Input() set jobState(stateInt: number){
    this.getJobStatus(stateInt);
  }

  public jobstatus: string = "";
  public badgeClass: string = "";
  constructor() { }


  private getJobStatus(jobStatus: number): void{
    switch(jobStatus){
      case 0:
        this.jobstatus = "Open";
        this.badgeClass = "badge-success";
        break;
      case 1:
        this.jobstatus = "In Progress";
        this.badgeClass = "badge-info";
        break;
      case 2:
        this.jobstatus = "Completed";
        this.badgeClass = "badge-success";
        break;
      case 3:
        this.jobstatus = "Rejected";
        this.badgeClass = "badge-danger";
        break;
      case 4:
        this.jobstatus = "Cancelled";
        this.badgeClass = "badge-warning";
        break;
      default:
        this.jobstatus = "";
        this.badgeClass = "";
    }
  }
}
