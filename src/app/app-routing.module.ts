import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { CreatejobComponent } from './components/job/createjob/createjob.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { ChatComponent } from './components/chat/chat.component';
import { JobComponent } from './components/job/job.component';
import { AnswerComponent } from './components/answer/answer.component';
import { RtcconComponent } from './components/rtccon/rtccon.component';
import { AudioComponent } from './components/audio/audio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/AboutComponent";
import { ContactComponent } from './components/contact/contact.component';
import { VideocandeactivateService } from './guards/videocandeactivate.service';
import { CanactiveguardserviceService } from './guards/canactiveguardservice.service';
import { SitelayoutComponent } from './components/sitelayout/sitelayout.component';
import { VideoComponent } from './test/video/video.component';
import { HomeComponent } from './twilio/home/home.component';
import { UserComponent } from './components/user/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { SessionComponent } from './components/sessions/session/session.component';

const routes: Routes = [
  {
    path: '',
    component: SitelayoutComponent,
    children: [
      {
        path: 'Dashboard', component: DashboardComponent,
        canActivate: [CanactiveguardserviceService]
      },
      {
        path: 'Languages', component: LanguagesComponent,
        canActivate: [CanactiveguardserviceService],
        data: { allowedRoles: ['Administrator'] }
      },
      { path: 'Contact', component: ContactComponent },
      { path: 'About', component: AboutComponent, canDeactivate: [VideocandeactivateService] },
      { path: 'Audio', component: AudioComponent },
      { path: 'RTC', component: RtcconComponent },
      { path: 'Answer', component: AnswerComponent },
      { path: 'Chat', component: ChatComponent },
      {
        path: 'Users', component: UserComponent,
        canActivate: [CanactiveguardserviceService],
        data: { allowedRoles: ['Administrator'] }
      },
      { path: 'Video', component: VideoComponent },
      { path: 'VideoSession/:id', component: HomeComponent },
      { path: 'Home', component: HomeComponent },
      {
        path: 'Sessions', component: SessionsComponent,
        canActivate: [CanactiveguardserviceService],
        data: { allowedRoles: ['Administrator', 'Client', 'Translator' ] }
      },
      {
        path: 'Session/:id', component: SessionComponent,
        canActivate: [CanactiveguardserviceService],
        data: { allowedRoles: ['Administrator', 'Visitor'] }
      },
      {
        path: 'GenerateRequest', component: CreatejobComponent,
        canActivate: [CanactiveguardserviceService],
        data: { allowedRoles: ['Administrator', 'Client'] }
      },
      {
        path: 'ResetPassword', component: ResetpasswordComponent,
        canActivate: [CanactiveguardserviceService],
        data: { allowedRoles: ['Administrator', 'Client', 'Translator'] }
      },
      {
        path: 'Jobs',
        component: JobComponent,
        canActivate: [CanactiveguardserviceService],
        data: { allowedRoles: ['Administrator', 'Visitor', 'Translator', 'Client'] }
      }
    ]
  },
  { path: 'Login', component: LoginComponent },
  { path: 'Logout', component: LogoutComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
