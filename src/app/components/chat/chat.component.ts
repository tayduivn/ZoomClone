import { Router } from '@angular/router';
import { MessageService } from './../../services/message.service';
import { TokenService } from 'src/app/admin/services/token.service';
import { ChatService, Message } from './../../services/chat.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { BaseCrudApi } from 'src/app/admin/models/base-view-model';
import { takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent extends BaseCrudApi<Message> implements OnInit {

  title = 'ClientApp';
  user: string = "";
  txtMessage: string = '';
  uniqueID: string = new Date().getTime().toString();  
  messages = new Array<Message>();
  message = new Message();
  ToUser: string = "";

  constructor(private chatService: ChatService,private ngZone: NgZone,
    private tokenService: TokenService,private messageService: MessageService,private router: Router) { super(); }

  ngOnInit(): void {
    this.chatService.createConnection(this.tokenService.getUserName());
    this.chatService.startConnection();
    this.chatService.registerOnServerEvents();
    this.subscribeToevent();
    this.user = this.tokenService.getUser().startName!;
    this.getItems();
  }
  sendMessage(): void {  
    if (this.txtMessage) {  
      this.message = new Message();  
      this.message.clientuniqueid = this.uniqueID;
      this.message.type = "sent";
      this.message.message = this.txtMessage;
      this.message.date = new Date();
      this.message.receiver = this.ToUser;
      this.message.sender = this.tokenService.getUserName();
      this.messages.push(this.message);
      this.chatService.sendMessage(this.ToUser ,this.message);
      this.txtMessage = '';
    }  
  }  
  private subscribeToevent(){
    this.chatService.messageReceived.subscribe((msg: Message) => {
      this.ngZone.run(() => {
        if(msg.sender !== this.tokenService.getUserName()){
          msg.type = "received";
          this.messages.push(msg);
        }
      });
    });
  }

  getItems(page: number = 1){
    this.isLoading = true;
    this.messageService.getMessages('aftab@gmail.com')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      if(res.isSuccess){
        this.items = res.listModel!,
        this.items.reverse();
        this.items.forEach(x => {
          if(x.sender !== this.tokenService.getUserName()){
            x.type = "received";
            this.messages.push(x);
          }else{
            this.messages.push(x);
          }
        });
        //this.pager = res.pager
      }else{
        this.isError = true;
        this.errorMessage = res.message;
      }
    },
    (error: HttpErrorResponse) => {
      debugger;
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
    },
    () => {
      this.isLoading = false;
      if(this.pager != undefined && this.pager.currentPage > 0){
        this.runIT();
      }
    })
  }
  getmore(){
    this.pageNo++;
    this.getItems(this.pageNo);
  }
}
