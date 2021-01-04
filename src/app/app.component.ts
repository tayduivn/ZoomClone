import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;
import { 
  NavigationEnd,
  NavigationStart,
  Router
 } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit{
  //isLoader: boolean = false;
  constructor(private title: Title,private _router: Router)
  {
    title.setTitle('Home from title');
  }
  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('body').css('padding-top',$('.navbar').outerHeight() + 'px');
    });
  }
  ngOnInit(): void
  {
    //this.routerEvents();
  }
  routerEvents() {
    this._router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          //this.isLoader = true;
          break;
        }
        case event instanceof NavigationEnd: {
          //this.isLoader = false;
          break;
        }
      }
    });
}
}
