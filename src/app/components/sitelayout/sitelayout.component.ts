import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/BaseViewModel';
import { TokenService } from 'src/app/services/user/token.service';
import { JobService } from 'src/app/services/job.service';
declare var $: any;

@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.css']
})
export class SitelayoutComponent implements OnInit , AfterViewInit{
  userName: string = "";
  isloggedin: boolean = false;
  public role: Roles = Roles.None;
  constructor(private tokenService: TokenService,private JobService: JobService) 
  { 
    let allowedRoles: string[] = this.tokenService.getUserRoles();
    allowedRoles.forEach(r => {
      if(r === Roles.Administrator){
        this.role = Roles.Administrator;
      }
    });
  }

  ngOnInit(): void {
      this.userName = this.tokenService.getUserName();
      this.isloggedin = this.tokenService.isAuthenticated();
  }
  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('body').css('padding-top',$('.navbar').outerHeight() + 'px');
    });
  }

  onToggle(){
      $("#toggleme").toggleClass("sb-sidenav-toggled");
  }
}
