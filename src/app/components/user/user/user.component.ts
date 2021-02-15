import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BaseCrudApi } from 'src/app/models/BaseViewModel';
import { UserChangeViewModel, UserViewModel } from 'src/app/models/user';
import { TokenService } from 'src/app/services/user/token.service';
import { UserService } from 'src/app/services/user/users.service';
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseCrudApi<UserViewModel> implements OnInit , OnDestroy {

  model: UserViewModel = new UserViewModel();
  changeModel: UserChangeViewModel = new UserChangeViewModel();
  isRegistrationModalShow = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService,
    private message: NzMessageService,
    ) { 
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
      this.runIT();
    })
  }
  getByPager(page: number){
    this.childNumber = page;
    this.getItems(this.childNumber);
  }
  reset(){
    if(this.query !== ''){
      this.query = '';
      this.getItems();
    }
  }
  onChangePassword(id: any)
  {
    this.changeModel.id = id;
    $("#changePasswordModal").modal('toggle');
  }
  onChangeFormSubmit(){
    this.isSaving = true;
    this.add = this.userService.ChangePassword(this.changeModel).subscribe(res => {
      if(res.isSuccess){
        this.message.create('success',"Password has been changed successfully", { nzDuration: 10000 });
      }else{
        this.message.create('error',res.message!,{
          nzDuration: 10000
        });
      }
    },er => this.HandleError(er),
    () => {
      this.HandleCompletion();
      $("#changePasswordModal").modal('hide');
      this.changeModel = new UserChangeViewModel();
    })
  }
  onBlockedUser(id: any)
  {
    this.changeModel.id = id;
    $("#changePasswordModal").modal('toggle');
  }
  confirm(id: any): void {
    this.userService.BlockedUSer(id).subscribe(res => {
      if(res.isSuccess){
        this.message.success(`User has been blocked successfully.`);
      }else{
        this.message.error(`${res.message}`);
      }
    });
  }
  hideModal()
  {
    $("#changePasswordModal").modal('hide');
  }
  showRegModal(){
    this.isRegistrationModalShow = true;
    $("#newUserModal").modal('show');
  }
  hideRegModal(){
    this.isRegistrationModalShow = false;
    $("#newUserModal").modal('hide');
  }
  ngOnDestroy(): void {
    this.dispose();
  }
}
