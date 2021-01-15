import { Router } from '@angular/router';
import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenService: TokenService,private router: Router) { }

  ngOnInit(): void {
    this.tokenService.removeUser();
    this.router.navigateByUrl("/Login");
  }

}
