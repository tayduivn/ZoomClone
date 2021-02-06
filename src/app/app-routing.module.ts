import { LanguagesComponent } from './components/languages/languages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { NotfoundComponent } from './admin/notfound/notfound.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegisterComponent } from './admin/register/register.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { JobComponent } from './components/job/job.component';
import { LoginComponent } from './admin/login/login.component';
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
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: '' ,
   component: SitelayoutComponent,
   children: [
    { path: 'Dashboard' , component: DashboardComponent },
    { path: 'Languages' , component: LanguagesComponent },
    { path: 'Contact' , component: ContactComponent },
    { path: 'About' , component: AboutComponent , canDeactivate: [ VideocandeactivateService ]},
    { path: 'Audio' , component: AudioComponent },
    { path: 'RTC' , component: RtcconComponent },
    { path: 'Answer' , component: AnswerComponent },
    { path: 'Chat' , component: ChatComponent },
    { path: 'Users' , component: UsersComponent },
    { path: 'Video' , component: VideoComponent },
    { path: 'TwilioHome' , component: HomeComponent },
    { path: 'Sessions' , component: SessionsComponent },
    { path: 'Jobs',
      component: JobComponent,
      canActivate: [ CanactiveguardserviceService ],
      data: { allowedRoles: ['Admin','Visitor','Translator','Client'] } }
   ]
  },
  { path: 'Login' , component: LoginComponent },
  { path: 'Logout' , component: LogoutComponent },
  { path: 'Register' , component: RegisterComponent },
  { path: '**' , component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
