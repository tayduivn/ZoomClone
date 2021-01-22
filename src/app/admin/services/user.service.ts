import { Observable, Subject } from 'rxjs';
import { Directive, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserDTO, UserViewModel } from '../models/user';
import { BaseViewModel } from '../models/base-view-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public GetUsers(page: number = 1, query: string = ""): Observable<BaseViewModel<UserViewModel>>{
    let url = `${environment.apiUrl}User/GetUsers?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<UserViewModel>>(url);
  }

  public Login(loginmodel: LoginModel): Observable<BaseViewModel<UserDTO>>{
    return this.http.post<BaseViewModel<UserDTO>>(`${environment.apiUrl}Account/Login`, loginmodel);
  }

}


export class LoginModel{
  public constructor(init?: Partial<LoginModel>){
    Object.assign(this,init);
  }
  public UserName: string | undefined;
  public Password: string | undefined;
}

