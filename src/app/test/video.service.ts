import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  messageReceived = new EventEmitter<Message>();
  isConnected = new EventEmitter<boolean>();
  private _hubConnection!: signalR.HubConnection;

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
        console.log('Started service . . .');
        this.isConnected.emit(true);
      })
      .catch(err => {  
        console.log('Error while establishing connection...');
      });
  }
  public sendMessage(username: string = 'aftab@gmail.com', message: Message){
    this._hubConnection.invoke("SendMessage",username, message);
  }
  public registerOnServerEvents(): void {  
    this._hubConnection.on('MessageReceived', (data: any) => {  
      this.messageReceived.emit(data);
    });
    this._hubConnection.onclose(() => {
      console.log("Service has been stopped. . . .");
      this.isConnected.emit(false);
    });
  }  

}



export interface Message{
  type: string;
  data: any;
}