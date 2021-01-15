import { TokenService } from './../admin/services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanactiveguardserviceService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this.router.url);
    if(this.tokenService.isAuthenticated()){
      return true;
    }else{
      //this.router.navigateByUrl("/Login");
      this.router.navigate(['/Login'], {queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
