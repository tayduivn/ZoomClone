import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pager } from 'src/app/admin/models/base-view-model';

@Component({
  selector: 'app-zoompagination',
  templateUrl: './zoompagination.component.html',
  styleUrls: ['./zoompagination.component.css']
})
export class ZoompaginationComponent implements OnInit {
  
  @Input() pager!: Pager;
  @Output() pagerNumber = new EventEmitter<number>();

  constructor() { }

  myNumbers: number[] = [];
  ngOnInit(): void {
    debugger;
    this.runIT();
  }

  runIT(): void{
    this.myNumbers = [];
    debugger;
    for(let page = this.pager.startPage;page <= this.pager.endPage;page++){
      this.myNumbers.push(page);
    }
  }
  getByPager(pageNo: number): void{
    this.pagerNumber.emit(pageNo);
  }
}
