import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import { retry, catchError, retryWhen, delay, scan } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptererrorhandlingService implements HttpInterceptor {

  constructor(private toastr: ToastrService,private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
     .pipe(
       catchError((error: HttpErrorResponse) => {
         let errorMessage = '';
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Something bad happen to your network: ${error.error.message}`;
         } else {
           // server-side error
           console.log(JSON.stringify(error));
           errorMessage = `Error while processing your request: ${error.status}\nMessage: ${error.message}`;
           if(error.status === 401){
             this.router.navigateByUrl("/Logout");
           }
         }
         this.toastr.error(`${errorMessage}`,`Error`);
         return throwError(errorMessage);
       })
     )
 }
}
