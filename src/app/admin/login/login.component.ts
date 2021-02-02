import { UserDTO } from './../models/user';
import { BaseCrudApi, BaseViewModel } from './../models/base-view-model';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel, UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/internal/operators/delay';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseCrudApi<UserDTO> implements OnInit {
  LoginModel!: LoginModel;
  loginForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService) {
    super();
    this.loginForm = this.formBuilder.group({
      UserName: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required,Validators.minLength(3)]),
  });
}

  ngOnInit(): void {}

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   get getEmail(){
     return this.loginForm.get('UserName');
   }
   get getPassword(){
    return this.loginForm.get('Password');
  }

  onSubmit(){
    this.submitted = true;
      if (this.loginForm.invalid) {
        return;
    }
    this.LoginModel = new LoginModel(this.loginForm.value);
    this.isLoading = true;
    this.userService.Login(this.LoginModel)
    .pipe(delay(500))
    .subscribe((res: BaseViewModel<UserDTO>) => {
      if(res.isSuccess){
        this.tokenService.setUser(res.model!);
        this.router.navigateByUrl('/Users');
      }else{
        this.isError = true;
        this.errorMessage = res.message;
      }
    },
    (error: HttpErrorResponse) => {
      this.isError = true;
      this.errorMessage = error.message;
    },
    () => {
      this.isLoading = false;
    });
  }
}
