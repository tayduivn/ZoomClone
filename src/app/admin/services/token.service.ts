import { Injectable } from '@angular/core';
import { UserDTO } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  userDTO!: UserDTO;
  constructor(private jwthelperservice: JwtHelperService) { }
  public setUser(userDTO: UserDTO){
    localStorage.setItem("user", JSON.stringify(userDTO));
    localStorage.setItem("access_token", userDTO.token!);
  }
  public getUser(): UserDTO{
    this.userDTO = JSON.parse(localStorage.getItem('user') || '{}');
    return this.userDTO;
  }
  public hasToken(): boolean{
    let token = this.getUser().token;
    if(typeof token != undefined && token && token.length > 0){
      return true;
    }else{
      return false;
    }
  }
  public removeUser(): void{
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
  }
  public isAuthenticated(): boolean
  {
    let token = localStorage.getItem("access_token")!;
    if(this.jwthelperservice.isTokenExpired(token)){
      return false; // Token is not valid
    }else{
      return true; // Token is valid
    }
  }
  public getUserName(): string{
    return `${this.getUser().username}`;
  }
}
