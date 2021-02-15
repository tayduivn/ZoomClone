import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pager } from 'src/app/models/BaseViewModel';

@Component({
  selector: 'app-paginaton',
  templateUrl: './paginaton.component.html',
  styleUrls: ['./paginaton.component.css']
})
export class PaginatonComponent {

  constructor() { }

  myNumbers: number[] = [];
  _pager: Pager = new Pager();
  _isPaginationLoading = false;


  @Input() set isPaginationLoading(isPag: boolean){
    this._isPaginationLoading = isPag;
  }
  @Input() set pager(pager: Pager){
    this._pager = pager;
    this.runIT();
  }
  @Output() nextPage: EventEmitter<number> = new EventEmitter<number>();

  public runIT(): void{
    this.myNumbers = [];
    if(this._pager != undefined && this._pager.currentPage > 0){
      for(let page = this._pager.startPage; page <= this._pager.endPage; page++){
        this.myNumbers.push(page);
      }
    }
  }

  getNextPage(page: number){
    this.nextPage.emit(page);
  }
}
