import { Subscription } from 'rxjs';
import { UserService } from '../../services/user/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserChangeViewModel } from 'src/app/models/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/services/user/token.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit , OnDestroy{

  user: UserChangeViewModel = new UserChangeViewModel();
  userForm!: FormGroup;
  submitted = false;
  isLoading = false;
  private subscriptions: Subscription[] = [];
  set add(subscription: Subscription){
    this.subscriptions.push(subscription);
  }
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private message: NzMessageService) {
    this.userForm = this.formBuilder.group({
      oldPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
  }

  ngOnInit(): void {
    this.add = this.userForm.valueChanges.subscribe(field => {
      if (field.newPassword !== field.confirmPassword) {
        this.userForm.controls.confirmPassword.setErrors({ mismatch: true });
      }
    });
  }
  onResetSubmitForm() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.user = new UserChangeViewModel(this.userForm.value);
    this.isLoading = true;
    this.add = this.userService.ResetPassword(this.user).subscribe(res => {
      if (res.isSuccess) {
        this.message.create('success', "Password changed successfully.", { nzDuration: 10000 });
        this.userForm.reset();
        this.userForm.markAsUntouched();
      } else {
        this.message.create('error', res.message!, { nzDuration: 10000 });
      }
    }, er => {
      this.message.create('error', 'Opps! Something went wring', { nzDuration: 10000 });
      this.isLoading = false;
    }, () => {
      console.log('Completed request...');
      this.isLoading = false;
      this.submitted = false;
    });
  }
  get getOldPassword() {
    return this.userForm.get('oldPassword');
  }
  get getNewPassword() {
    return this.userForm.get('newPassword');
  }
  get getconfirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    });
  }
}
