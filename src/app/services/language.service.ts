import { Language } from './../models/tbllanguage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, map, retryWhen, scan } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './user/token.service';
import { BaseViewModel } from '../models/BaseViewModel';
import { localhelper } from '../models/localhelper';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public helper: localhelper = new localhelper();
  private AllLanguages: BehaviorSubject<Language[]> = new BehaviorSubject<Language[]>([]);
  public $AllLanguages = this.AllLanguages.asObservable();
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getLanguages(page: number = 1, query: string = ''): Observable<BaseViewModel<Language>> {
    let url = `${environment.apiUrl}Language/GetLanguages?page=${page}&query=${query}`;
    return this.http.get<BaseViewModel<Language>>(url)
      .pipe(
        retryWhen(notifier => notifier.pipe(
          delay(3000),
          scan((retryCount) => {
            if (retryCount >= 5) {
              throw notifier;
            } else {
              retryCount++;
              console.log(`Retrying Attempts: ${retryCount}`);
              return retryCount;
            }
          }, 0)
        ))
      );
  }
  public getAllLanguages(): Observable<Language[]> {
    let lst: Language[] = this.getWithExpiry("Languages");
    if (lst !== null && lst.length !== 0) {
      this.AllLanguages.next(lst);
      return this.$AllLanguages;
    }

    let url = `${environment.apiUrl}Language/GetAllLanguages`;
    return this.http.get<BaseViewModel<Language>>(url)
      .pipe(
        map(res => {
          this.setWithExpiry("Languages",res.listModel!);
          return res.listModel!;
        }),
        retryWhen(notifier => notifier.pipe(
          delay(3000),
          scan((retryCount) => {
            if (retryCount >= 5) {
              throw notifier;
            } else {
              retryCount++;
              console.log(`Retrying Attempts: ${retryCount}`);
              return retryCount;
            }
          }, 0)
        ))
      );
  }
  public setWithExpiry(key: any, value: Language[]) {
    let minutesToAdd = 60;
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
  public getLanguagesByName(query: string = ''): Observable<any[]> {
    let data: any[] = [];
    let url = `${environment.apiUrl}Language/GetLanguagesByName?languageName=${query}`;
    return this.http.get<BaseViewModel<Language>>(url).pipe(
      map(res => {
        res.listModel?.forEach(l => {
          data.push({
            id: `${l.languageID}`,
            name: `${l.name}`
          })
        })
        return data;
      })
    );
  }
  public createLanguage(language: Language): Observable<BaseViewModel<Language>> {
    let url = `${environment.apiUrl}Language/Create`;
    return this.http.post<BaseViewModel<Language>>(url, language);
  }
}
