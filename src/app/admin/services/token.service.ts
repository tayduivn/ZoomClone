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
  public isAuthorized(allowedRoles: string[]): boolean
  {
     // check if the list of allowed roles is empty, if empty, authorize the user to access the page
  if (allowedRoles == null || allowedRoles.length === 0) {
    return true;
  }
  // get token from local storage or state management
 let token = localStorage.getItem('access_token');
    // decode token to read the payload details
  const decodeToken = this.jwthelperservice.decodeToken(token!);
// check if it was decoded successfully, if not the token is not valid, deny access
  if (!decodeToken) {
    console.log('Invalid token');
    return false;
  }
// check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
  return allowedRoles.includes(decodeToken['role']);
  }
  public getUserRoles(): string[]{
     // get token from local storage or state management
  let token = localStorage.getItem('access_token');
  // decode token to read the payload details
  if(!token){
  return [];
  }
  const decodeToken = this.jwthelperservice.decodeToken(token!);
  if (!decodeToken) {
    return [];
  }
  let array: string[] = [];
  let item = decodeToken['role'];
  if(Array.isArray(item)){
    item.forEach(e => {
      array.push(e);
    });
  }else{
    array.push(item);
  }
  return array;
  }
}
