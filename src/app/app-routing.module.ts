import { CounterComponent } from './aaa/counter/counter.component';
import { AnswerComponent } from './components/answer/answer.component';
import { RtcconComponent } from './components/rtccon/rtccon.component';
import { UserComponent } from './components/user/user.component';
import { AudioComponent } from './components/audio/audio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/AboutComponent";
import { ContactComponent } from './components/contact/contact.component';
import { UserresolverService } from './resolvers/userresolver.service';

const routes: Routes = [
  { path: 'Contact' , component: ContactComponent },
  { path: 'About' , component: AboutComponent },
  { path: 'Audio' , component: AudioComponent },
  { path: 'RTC' , component: RtcconComponent },
  { path: 'Answer' , component: AnswerComponent },
  { path: 'Login' , component: CounterComponent },
  { path: 'User' , 
    component: UserComponent,
    // resolve: {
    //   users: UserresolverService
    // }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
