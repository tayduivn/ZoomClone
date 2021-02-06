import { UserService } from './../services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseCrudApi } from '../models/base-view-model';
import { UserViewModel } from '../models/user';
import { takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends BaseCrudApi<UserViewModel> implements OnInit , OnDestroy {
  model: UserViewModel = new UserViewModel();
  constructor(private userService: UserService,private router: Router,private tokenService: TokenService) { 
    super();
    this.allowedRoles = this.tokenService.getUserRoles();
  }

  ngOnInit(): void {
    console.log('Users components');
    this.getItems();
  }
  getItems(page: number = 1){
    this.isLoading = true;
    this.add = this.userService.GetUsers(page,this.query)
    .subscribe(res => {
      if(res.isSuccess){
        this.items = res.listModel!,
        this.pager = res.pager
      }else{
        this.isError = true;
        this.errorMessage = res.message;
      }
    },
    (error: HttpErrorResponse) => {
      console.error(JSON.stringify(error.error));
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = error.message;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
    },
    () => {
      this.isLoading = false;
    })
  }
  reset(){
    if(this.query !== ''){
      this.query = '';
      this.getItems();
    }
  }
  onPopup()
  {
    $("#modal_aside_left").modal('toggle');
    this.getItems();
  }
  hideModal()
  {
    $("#modal_aside_left").modal('hide');
  }
  ngOnDestroy(): void {
    this.dispose();
  }
}
