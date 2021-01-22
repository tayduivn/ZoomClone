import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { BaseViewModel } from '../admin/models/base-view-model';
import { TokenService } from '../admin/services/token.service';
import { Message } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }
  
  public getMessages(receiver: string = ''): 
  Observable<BaseViewModel<Message>>
  {
    let sender = this.tokenService.getUserName();
    let url = `${environment.apiUrl}Messages/GetMessages?sender=${sender}&receiver=${receiver}`;
    return this.http.get<BaseViewModel<Message>>(url);
  }
}
