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
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { CreatejobComponent } from './components/job/createjob/createjob.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { JobtypeComponent } from './shared/jobtype/jobtype.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user/user.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { RegisterComponent } from './components/user/register/register.component';
import { JwtService } from './services/user/jwt.service';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { CustomregisterComponent } from './components/user/customregister/customregister.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { CoundownComponent } from './shared/coundown/coundown.component';
import { SessionComponent } from './components/sessions/session/session.component';
import { GridjobComponent } from './components/job/gridjob/gridjob.component';
import { SessionchecktimePipe } from './pipes/sessionchecktime.pipe';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';






registerLocaleData(en);

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
    SuccessComponent,
    CreatejobComponent,
    JobtypeComponent,
    LoginComponent,
    UserComponent,
    LogoutComponent,
    RegisterComponent,
    CustomregisterComponent,
    CoundownComponent,
    SessionComponent,
    GridjobComponent,
    SessionchecktimePipe,
    PagenotfoundComponent
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
    HttpClientModule,
    BrowserAnimationsModule,
    AutocompleteLibModule,
    NzNotificationModule,
    NzStepsModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzMessageModule,
    NzResultModule,
    NzPopconfirmModule,
    NgMultiSelectDropDownModule,
    NzTimePickerModule,
    NzRadioModule,
    GooglePlaceModule,
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
  exports:[],
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
    },
    { provide: NZ_I18N, useValue: en_US }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
