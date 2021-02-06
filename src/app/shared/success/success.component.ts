import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor() { }
  Classes = "";
  Message = "";
  _isSuccess = false;
  _isWarning = false;
  _isDanger = false;
  @Input() set SetMessage(msg: any)
  {
    this.Message = msg;
  }
  @Input() set isSuccess(msg: boolean)
  {
    this._isSuccess = msg;
  }
  @Input() set isWarning(msg: boolean)
  {
    this._isWarning = msg;
  }
  @Input() set isDanger(msg: boolean)
  {
    this._isDanger = msg;
  }
}
