import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private title: Title,private userService: UserService)
  {
    title.setTitle('Home from title');
  }
  ngOnInit(): void
  {

  }
}
