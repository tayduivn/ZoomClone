import { UserService } from 'src/app/services/user.service';
import { BaseCrudApi, User } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseCrudApi<User> implements OnInit {
  constructor(private _route: ActivatedRoute,private userService: UserService) { 
    super();
  }
  ngOnInit(): void {
    //this.items = this._route.snapshot.data["users"];
    //this.isLoading = true;
    this.userService.getUsers().subscribe(res => {
      this.items = res;
    },
    (error: HttpErrorResponse) => {
      this.isError = true;
      //this.isLoading = false;
      this.httpErrorResponse = error;
    },
    () => {
      this.isLoading = false;
    }); 
  }

}
