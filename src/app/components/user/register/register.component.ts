import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseCrudApi } from 'src/app/models/BaseViewModel';
import { RegisterDTO } from 'src/app/models/user';
import { TokenService } from 'src/app/services/user/token.service';
import { UserService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BaseCrudApi<RegisterDTO> implements OnInit {
  registerModel! : RegisterDTO;
  registerForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ){
    super();
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      username: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
   }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(field => {
      if (field.password !== field.confirmPassword) {
        this.registerForm.setErrors({ mismatch: true });
      }
    });
  }


  onSubmit(){
    this.submitted = true;
      if (this.registerForm.invalid) {
        return;
    }
    this.registerModel = new RegisterDTO(this.registerForm.value);
    this.isLoading = true;
    this.userService.Register(this.registerModel)
    .subscribe(res => {
      if(!res.isSuccess){
        this.isError = true;
        this.errorMessage = res.message;
        return;
      }
      this.router.navigateByUrl("/Login");
      console.log(JSON.stringify(res));
    },(error: HttpErrorResponse) => {
      console.log(JSON.stringify(error));
      this.isLoading = false;
    },() => {
      this.isLoading = false;
    })
  }

  get getFirstName(){
    return this.registerForm.get('firstName');
  }
  get getLastName(){
    return this.registerForm.get('lastName');
  }
  get getUsername(){
    return this.registerForm.get('username');
  }
  get getEmail(){
    return this.registerForm.get('email');
  }
  get getPassword(){
    return this.registerForm.get('password');
  }
  get getConfirmPassword(){
    return this.registerForm.get('confirmPassword');
  }
}