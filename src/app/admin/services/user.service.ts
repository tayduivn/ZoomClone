import { Observable, Subject } from 'rxjs';
import { Directive, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserDTO } from '../models/user';
import { BaseViewModel } from '../models/base-view-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public Login(loginmodel: LoginModel): Observable<BaseViewModel<UserDTO>>{
    return this.http.post<BaseViewModel<UserDTO>>("https://localhost:44339/Account/Login", loginmodel);
  }

}


export class LoginModel{
  public constructor(init?: Partial<LoginModel>){
    Object.assign(this,init);
  }
  public UserName: string | undefined;
  public Password: string | undefined;
}

