import { localhelper } from './../../models/localhelper';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDTO } from 'src/app/models/user';
import { Language } from 'src/app/models/tbllanguage';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  userDTO!: UserDTO;
  helper: localhelper = new localhelper();
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
  let languageIds = decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/streetaddress'];
  console.log(JSON.stringify(languageIds));
  if(Array.isArray(item)){
    item.forEach(e => {
      array.push(e);
    });
  }else{
    array.push(item);
  }
  return array;
  }
  public setWithExpiry(key: any, value: Language[]) {
    let minutesToAdd = 10; // 10 Minutes
    const now = new Date();
    this.helper = new localhelper();
    this.helper.expiry = now.getTime() + (minutesToAdd * 60000);
    this.helper.value = value;
    localStorage.setItem(key, JSON.stringify(this.helper));
  }
  public getWithExpiry(key: any): Language[] {
    const itemStr = localStorage.getItem(key);
    if (itemStr === null) {
      return [] as Language[];
    }
    this.helper = JSON.parse(itemStr);
    const now = new Date()
    if (now.getTime() > this.helper.expiry) {
      localStorage.removeItem(key)
      return [] as Language[];
    }
    return this.helper.value;
  }
}
