import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseViewModel } from 'src/app/models/BaseViewModel';
import { RegisterDTO, UserChangeViewModel, UserDTO, UserViewModel } from 'src/app/models/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  public GetUsers(page: number = 1, query: string = ""): Observable<BaseViewModel<UserViewModel>>
  {
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

  public Register(registerDTO: RegisterDTO): Observable<BaseViewModel<RegisterDTO>>
  {
    return this.http.post<BaseViewModel<RegisterDTO>>(`${environment.apiUrl}Account/Register`, registerDTO);
  }

  public Login(loginmodel: LoginModel): Observable<BaseViewModel<UserDTO>>
  {
    return this.http.post<BaseViewModel<UserDTO>>(`${environment.apiUrl}Account/Login`, loginmodel);
  }

  public ChangePassword(model: UserChangeViewModel): Observable<BaseViewModel<UserChangeViewModel>>
  {
    return this.http.post<BaseViewModel<UserChangeViewModel>>(`${environment.apiUrl}User/ChangePassword`, model);
  }

  public BlockedUSer(id: string): Observable<BaseViewModel<UserChangeViewModel>>
  {
    return this.http.get<BaseViewModel<UserChangeViewModel>>(`${environment.apiUrl}User/BlockedUser?Id=${id}`);
  }

}


export class LoginModel{
  public constructor(init?: Partial<LoginModel>){
    Object.assign(this,init);
  }
  public UserName: string | undefined;
  public Password: string | undefined;
}
