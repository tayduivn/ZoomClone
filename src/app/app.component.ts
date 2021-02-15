import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  //isLoader: boolean = false;
  constructor()
  {

  }
  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('body').css('padding-top',$('.navbar').outerHeight() + 'px');
    });
  }
}
