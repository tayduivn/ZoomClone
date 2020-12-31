import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BaseCrudApi, User, UserService } from 'src/app/user.service';
import { takeUntil } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BaseCrudApi<User> implements OnInit , OnDestroy {
  constructor(private title: Title,private userService: UserService,private logger: NGXLogger)
  {
    super(userService);
    title.setTitle('About');
  }
}
