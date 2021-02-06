import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDTO, UserDTO, UserViewModel } from '../models/user';
import { BaseViewModel } from '../models/base-view-model';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public GetUsers(page: number = 1, query: string = ""): Observable<BaseViewModel<UserViewModel>>{
    let url = `${environment.apiUrl}User/GetUsers?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<UserViewModel>>(url);
  }

  public SearchUsers(firstname: string = ""): Observable<any[]>{
    let url = `${environment.apiUrl}User/SearchUsers?firstname=${firstname}`;
    let data: any[] = [];
    let count = 1;
    return this.http.get<BaseViewModel<UserViewModel>>(url).pipe(
      map(res => {
        res.listModel?.forEach(u => {
          data.push({
            id: count++,
            name: `${u.userName}`
          });
        })
        return data;
      })
    );
  }

  public Register(registerDTO: RegisterDTO): Observable<BaseViewModel<RegisterDTO>>{
    return this.http.post<BaseViewModel<RegisterDTO>>(`${environment.apiUrl}Account/Register`, registerDTO);
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

