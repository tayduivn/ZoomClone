import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseCrudApi, BaseViewModel } from 'src/app/models/BaseViewModel';
import { UserDTO } from 'src/app/models/user';
import { TokenService } from 'src/app/services/user/token.service';
import { LoginModel, UserService } from 'src/app/services/user/users.service';

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
      Password: new FormControl('', [Validators.required]),
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
    .subscribe((res: BaseViewModel<UserDTO>) => {
      if(res.isSuccess){
        this.tokenService.setUser(res.model!);
        this.router.navigateByUrl('/Dashboard');
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
