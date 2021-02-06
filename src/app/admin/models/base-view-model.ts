import { HttpErrorResponse } from "@angular/common/http";
import { Directive } from "@angular/core";
import { Subject, Subscription } from "rxjs";

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
export class SubscriptionsContainer{
  private subs: Subscription[] = [];
  set add(s: Subscription){
    this.subs.push(s);
  }
  dispose(){
    this.subs.forEach(s => s.unsubscribe());
  }
}
@Directive()
export class BaseCrudApi<T>{
  public httpErrorResponse!: HttpErrorResponse;
  public unsubscribe$ = new Subject<void>();
  public isLoading: boolean = false;
  public isError: boolean = false;
  public errorMessage: string | undefined;
  public isSaved = false;
  public isSaving = false;
  public items: T[] = [];
  public query: string = '';
  public pager: Pager = new Pager();
  public pageNo: number = 1;
  myNumbers: number[] = [];
  allowedRoles: string[] = [];
  private subs: Subscription[] = [];
  set add(s: Subscription){
    this.subs.push(s);
  }
  dispose(){
    this.subs.forEach(s => s.unsubscribe());
  }
}