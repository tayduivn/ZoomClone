import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { interval } from 'rxjs/internal/observable/interval';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messageReceived = new EventEmitter<Message>();
  connectionIDReceived = new EventEmitter<string>();
  datetimeReceived = new EventEmitter<Date>();
  connectionEstablished = new EventEmitter<Boolean>();
  public connectionID: string = "";
  private connectionIsEstablished = false;
  private _hubConnection!: signalR.HubConnection;
  constructor() { }

  public createConnection(username: string) {  
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}MessageHub?username=${username}`)
      .configureLogging(signalR.LogLevel.Information)
      .build();
  }
  public startConnection(): void {  
    this._hubConnection  
      .start()
      .then(() => {  
        this.connectionIsEstablished = true;  
        console.log('Started service . . .');
        this.connectionEstablished.emit(true);
      })
      .catch(err => {  
        console.log('Error while establishing connection...');
      });
  }
  public sendMessage(usernameTo: string, message: Message){
    this._hubConnection.invoke("SendMessage",usernameTo, message);
  }
  public registerOnServerEvents(): void {  
    this._hubConnection.on('MessageReceived', (data: any) => {  
      this.messageReceived.emit(data);
    });
    this._hubConnection.on('onReceivedTime', (data: any) => {  
      this.datetimeReceived.emit(data);
      console.log(JSON.stringify(data));
    });
    this._hubConnection.onclose(() => {
      console.log("Service has been stopped. . . .");
    });
  }  
}


export class Message{
  public MessageID: number = 0;
  public clientuniqueid!: string;
  public type!: string;
  public message!: string;
  public date!: Date;
  public sender!: string;
  public receiver!: string;
}