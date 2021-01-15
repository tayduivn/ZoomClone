import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit {
  constructor(private _route: ActivatedRoute) { 
  }
  ngOnInit(): void {
    //this.items = this._route.snapshot.data["users"];
    //this.isLoading = true;
  }

}
