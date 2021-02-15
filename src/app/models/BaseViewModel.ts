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
export enum Roles{
  Administrator = 'Administrator',
  Visitor = 'Visitor',
  None = 'None'
}
@Directive()
export abstract class BaseCrudApi<T>
{
  public role: Roles = Roles.None;
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
  public runIT(): void{
    this.myNumbers = [];
    for(let page = this.pager.startPage;page <= this.pager.endPage;page++){
      this.myNumbers.push(page);
    }
  }
  public childNumber = 1;
  public HandleError(error: HttpErrorResponse)
  {
    console.log(`${JSON.stringify(error.message)} ${JSON.stringify(error.error)}`);
    this.isError = true;
    this.errorMessage = `${error.message} ${error.error}`;
    this.isLoading = false;
    this.isSaved = false;
    this.isSaving = false;
  }
  public HandleCompletion(isSavingParameter: boolean = false)
  {
    if(isSavingParameter)
    {
      this.isSaved = true;
    }
    this.isSaving = false;
    this.isLoading = false;
  }
}