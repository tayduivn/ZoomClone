import { JwtService } from './admin/services/jwt.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebRTCService } from './services/web-rtc.service';
import { AudioComponent } from './components/audio/audio.component';
import { RtcconComponent } from './components/rtccon/rtccon.component';
import { AnswerComponent } from './components/answer/answer.component';
import { CommonModule } from '@angular/common';
import { JobComponent } from './components/job/job.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ZoompaginationComponent } from './components/zoompagination/zoompagination.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { SitelayoutComponent } from './components/sitelayout/sitelayout.component';
import { ChatComponent } from './components/chat/chat.component';
import { VideoComponent } from './test/video/video.component';
import { CameraComponent } from './twilio/camera/camera.component';
import { HomeComponent } from './twilio/home/home.component';
import { ParticipantsComponent } from './twilio/participants/participants.component';
import { RoomsComponent } from './twilio/rooms/rooms.component';
import { SettingsComponent } from './twilio/settings/settings.component';
import { ToastrModule } from 'ngx-toastr';
import { DeviceSelectComponent } from './twilio/settings/device-select/device-select.component';
import { InterceptererrorhandlingService } from './services/interceptererrorhandling.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { PaginatonComponent } from './shared/paginaton/paginaton.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { ColoredrowComponent } from './shared/coloredrow/coloredrow.component';
import { NotfoundanyrecordComponent } from './shared/notfoundanyrecord/notfoundanyrecord.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SuccessComponent } from './shared/success/success.component';



export function tokenGetter() {
  return localStorage.getItem("access_token");
}


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    AudioComponent,
    LoaderComponent,
    RtcconComponent,
    AnswerComponent,
    JobComponent,
    ZoompaginationComponent,
    SitelayoutComponent,
    ChatComponent,
    VideoComponent,
    CameraComponent,
    HomeComponent,
    ParticipantsComponent,
    RoomsComponent,
    SettingsComponent,
    DeviceSelectComponent,
    PaginatonComponent,
    SessionsComponent,
    ColoredrowComponent,
    NotfoundanyrecordComponent,
    DashboardComponent,
    LanguagesComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutocompleteLibModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
      progressBar: true
    }), // ToastrModule added
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter
      }
    }),
    LoggerModule.forRoot({
    serverLoggingUrl: '/api/logs', 
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  })
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ 
    WebRTCService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptererrorhandlingService,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
