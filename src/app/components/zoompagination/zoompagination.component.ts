import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pager } from 'src/app/models/BaseViewModel';

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
    for(let page = this.pager.startPage;page <= this.pager.endPage;page++){
      this.myNumbers.push(page);
    }
  }
  getByPager(pageNo: number): void{
    this.pagerNumber.emit(pageNo);
  }
}
