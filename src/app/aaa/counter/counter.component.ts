import { Component, OnInit } from '@angular/core';
const btnPrimary: string = "btn-primary";
const btnSuccess: string = "btn-success";
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  btnColor: string = btnPrimary;
  constructor() { 
    //this.counter
  }

  ngOnInit(): void {
    this.counter = Number(sessionStorage.getItem("counter"));
  }

  plus(){
    if(this.counter % 2 == 0){
      this.btnColor = btnSuccess;
    }else{
      this.btnColor = btnPrimary;
    }
    this.counter++;
    sessionStorage.setItem("counter", this.counter.toString());
  }
}
