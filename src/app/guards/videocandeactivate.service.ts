import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AboutComponent } from '../components/about/AboutComponent';

@Injectable({
  providedIn: 'root'
})
export class VideocandeactivateService implements CanDeactivate<AboutComponent> {

  constructor() { }
  canDeactivate(component: AboutComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return confirm("Are you sure you want to leave !");
  }
}
