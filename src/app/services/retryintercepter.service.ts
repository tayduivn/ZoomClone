import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { delay, retryWhen, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetryintercepterService implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
     .pipe(
      retryWhen(notifier => notifier.pipe(
        delay(3000),
        scan((retryCount) => {
          if(retryCount >= 5){
            throw notifier;
          }else{
            retryCount++;
            this.toastr.error(`Retrying Attempts: ${retryCount}`,`Network connection failed.`);
            console.log(`Retrying Attempts: ${retryCount}`);
            return retryCount;
          }
        },0)
      )));
 }
}
