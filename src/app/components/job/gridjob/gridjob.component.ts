import { Job } from './../../../models/job';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gridjob',
  templateUrl: './gridjob.component.html',
  styleUrls: ['./gridjob.component.css']
})
export class GridjobComponent implements OnInit {

  constructor() { }
  btnText = "Apply Now";
  public _jobs: Job[] = [];

  @Input() set setTheJobs(jobs: Job[])
  {
    this._jobs = jobs;
  }

  @Output() giveJobId: EventEmitter<number> = new EventEmitter<number>();

  public confirmAccept(jobID: number)
  {
    this.giveJobId.emit(jobID);
  }

  ngOnInit(): void {}

}
