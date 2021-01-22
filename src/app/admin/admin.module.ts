import { ChatComponent } from './../components/chat/chat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [ // Components , directives and pipes that are part of current module.
  LoginComponent, 
  LogoutComponent, 
  RegisterComponent, 
  NotfoundComponent,
  UsersComponent
],
  imports: [ // List of modules so current module can use components that are already
             // exported by some other module
             CommonModule,
             BrowserModule,
             LoadingBarModule,
             LoadingBarRouterModule,
             LoadingBarHttpClientModule,
             AppRoutingModule,
             FormsModule,
             ReactiveFormsModule,
             HttpClientModule
  ],
  exports:[
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    UsersComponent
  ],
  providers:[

  ]
})
export class AdminModule { }
