import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/admin/services/token.service';
declare var $: any;

@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.css']
})
export class SitelayoutComponent implements OnInit , AfterViewInit{
  userName: string = "";
  isloggedin: boolean = false;
  constructor(private tokenService: TokenService) { }

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
