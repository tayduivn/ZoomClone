import { HttpErrorResponse } from "@angular/common/http";
import { Directive } from "@angular/core";
import { Subject } from "rxjs";

export class BaseViewModel<T> {
    public model: T | undefined;
    public listModel: T[] | undefined;
    public message: string | undefined;
    public isSuccess: boolean = false;
    public statusCode: number = 401;
    public pager: Pager = new Pager();

}
export class Pager{
    public totalItems!: number;
    public currentPage!: number;
    public pageSize!: number;
    public totalPages!: number;
    public startPage!: number;
    public endPage!: number;
}
@Directive()
export class BaseCrudApi<T>{
  public httpErrorResponse!: HttpErrorResponse;
  public unsubscribe$ = new Subject<void>();
  public isLoading: boolean = false;
  public isError: boolean = false;
  public errorMessage: string | undefined;
  public items: T[] = [];
  public query: string = '';
  public pager: Pager = new Pager();
  public pageNo: number = 1;
  myNumbers: number[] = [];
  allowedRoles: string[] = [];
  public runIT(): void{
    this.myNumbers = [];
    for(let page = this.pager.startPage; page <= this.pager.endPage; page++){
      this.myNumbers.push(page);
    }
  }
}