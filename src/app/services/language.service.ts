import { Language } from './../models/tbllanguage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, retryWhen, scan } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { BaseViewModel } from '../admin/models/base-view-model';
import { TokenService } from '../admin/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }
  
  public getLanguages(page: number = 1, query: string = ''): Observable<BaseViewModel<Language>>
  {
    let url = `${environment.apiUrl}Language/GetLanguages?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<Language>>(url)
    .pipe(
      retryWhen(notifier => notifier.pipe(
        delay(3000),
        scan((retryCount) => {
          if(retryCount >= 5){
            throw notifier;
          }else{
            retryCount++;
            console.log(`Retrying Attempts: ${retryCount}`);
            return retryCount;
          }
        },0)
      ))
    );
  }
  public createLanguage(language: Language): Observable<BaseViewModel<Language>>
  {
    let url = `${environment.apiUrl}Language/Create`;
    return this.http.post<BaseViewModel<Language>>(url, language);
  }
}
