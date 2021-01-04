import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from "./components/about/AboutComponent";
import { ContactComponent } from './components/contact/contact.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { FormsModule } from '@angular/forms';
import { WebRTCService } from './services/web-rtc.service';
import { AudioComponent } from './components/audio/audio.component';
import { UserComponent } from './components/user/user.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RtcconComponent } from './components/rtccon/rtccon.component';
import { AnswerComponent } from './components/answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    AudioComponent,
    UserComponent,
    LoaderComponent,
    RtcconComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
    serverLoggingUrl: '/api/logs', 
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  })
  ],
  providers: [WebRTCService],
  bootstrap: [AppComponent]
})
export class AppModule { }
