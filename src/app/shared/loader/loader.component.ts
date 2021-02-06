import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent  {

  constructor() { }
  _isLoading = false;
  @Input() set isLoading(isLoading: boolean){
    this._isLoading = isLoading;
  }

}
