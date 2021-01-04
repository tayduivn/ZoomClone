import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Directive, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ApiURL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.ApiURL);
  }

}

export class User{
  id: string | undefined;
  email: string | undefined;
  address: address = new address;
}
export class address{
  street: string | undefined;
  geo: geo = new geo;
}
export class geo{
  lat: string = "";
  lng: string = "";
}

@Directive()
export class BaseCrudApi<T>{
  public httpErrorResponse!: HttpErrorResponse;
  public unsubscribe$ = new Subject<void>();
  public isLoading: boolean = false;
  public isError: boolean = false;
  public items: T[] = [];
}
