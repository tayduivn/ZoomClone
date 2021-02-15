import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isApiUrl = req.url.startsWith(environment.apiUrl);
    let Token = "Bearer ";
    if(this.tokenService.hasToken() && isApiUrl){
      Token += this.tokenService.getUser().token!;
    }
    req = req.clone({
      setHeaders:{
        Authorization: Token
      }});
      return next.handle(req);
  }
}
