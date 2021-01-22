import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './../admin/services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanactiveguardserviceService implements CanActivate {
  Token!: string;
  constructor
  (private tokenService: TokenService,
   private router: Router,
   private jwtHelperService: JwtHelperService) 
   {
     this.Token = localStorage.getItem("access_token")!;
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let allowedRoles = route.data.allowedRoles;
    console.log(`Allowed Roles of ${route.routeConfig?.component?.name} : ${JSON.stringify(allowedRoles)}`);

    if(!this.tokenService.isAuthorized(allowedRoles))
    {
      this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    else if(this.tokenService.isAuthenticated())
    {
      return true;
    }
    else
    {
      //this.router.navigateByUrl("/Login");
      this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
