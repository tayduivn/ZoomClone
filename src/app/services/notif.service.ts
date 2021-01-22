import { EventEmitter, Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotifService {
  OfferReceived = new EventEmitter<string>();
  AnswerReceived = new EventEmitter<string>();
  IceCandidateReceived = new EventEmitter<string>();
  connectionEstablished = new EventEmitter<Boolean>();
  private connectionIsEstablished = false;
  private hubConnection!: signalR.HubConnection;

  constructor() {}

  public startConnection = () => {
    this.hubConnection = new signalR
    .HubConnectionBuilder()
    .withUrl(environment.apiUrl + "chart")
    .configureLogging(signalR.LogLevel.Information)
    .build();

    this.hubConnection.start()
    .then(() => console.log("Hub Connection started"))
    .catch(err => console.log('Error while starting connection: ' + err));
  };

  public SendOffer(Offer: string){
    if(this.hubConnection.state == 1){
      this.hubConnection?.invoke("SendOffer", Offer);
    }else{
      alert("Your connection state has been lost.");
    }
  }
  public SendAnswer(Answer: string){
    this.hubConnection?.invoke("SendAnswer", Answer);
  }
  public SendOnIceCandidate(IceCandidate: any){
    this.hubConnection?.invoke("SendOnIceCandidate", IceCandidate);
  }

  // Events registered on initializing
  public registerOnServerEvents(): void{

    this.hubConnection?.on("OfferReceived",(offer) => {
      this.OfferReceived.emit(offer);
    });
    this.hubConnection?.on("AnswerReceived",(answer) => {
      this.AnswerReceived.emit(answer);
    });
    this.hubConnection?.on("IceCandidateReceived",(IceCandidate) => {
      this.IceCandidateReceived.emit(IceCandidate);
    });
    this.hubConnection?.on("disconnected", (messagefromserver) => {
      console.log(messagefromserver);
    });
    this.hubConnection?.on("Connected", (messagefromserver) => {
      console.log(messagefromserver);
      this.connectionEstablished.emit(true);
    });
  }
  public CloseConnection(){
    this.hubConnection?.stop()
    .then(() => console.log("Hub Connection Closed "))
    .catch(error => console.log("Error occurred: " + error))
  }
}
