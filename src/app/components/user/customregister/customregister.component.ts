import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from 'src/app/models/user';
import { LanguageService } from 'src/app/services/language.service';
import { UserService } from 'src/app/services/user/users.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpErrorResponse } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-customregister',
  templateUrl: './customregister.component.html',
  styleUrls: ['./customregister.component.css']
})
export class CustomregisterComponent implements OnInit {

  registerForm!: FormGroup;
  newUser: RegisterDTO = new RegisterDTO();
  languageID: number = 0;
  dataLanguage: any[] = [];
  isLoading = false;
  keyword = "name";
  submitted: boolean = false;

  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private languageservice: LanguageService,
    private userService: UserService,
    private message: NzMessageService,
    private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(1)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(field => {
      if (field.password !== field.confirmPassword) {
        this.registerForm.controls.confirmPassword.setErrors({ mismatch: true });
      }
    });

    this.languageservice.getAllLanguages().subscribe(res => {
      this.dropdownList = res;
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'languageID',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onRegisterSubmitForm() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.selectedItems.length === 0) {
      alert("Please select atleast one language");
      return;
    }
    this.newUser = new RegisterDTO(this.registerForm.value);
    this.selectedItems.forEach(x => {
      this.newUser.languageID.push(x.languageID);
    });
    this.selectedItems = [];
    this.isLoading = true;
    this.userService.Register(this.newUser).subscribe(res => {
      if (res.isSuccess) {
        this.message.create('success', "User registered successfully.", { nzDuration: 10000 });
        this.newUser = new RegisterDTO();
        $("#newUserModal").modal('hide');
        this.registerForm.reset();
        this.registerForm.markAsUntouched();
        this.submitted = false;
      } else {
        this.message.create('error', res.message!, { nzDuration: 10000 });
        this.newUser.languageID = [];
      }
    },
      (er: HttpErrorResponse) => {
        this.message.create('error', er.error!, { nzDuration: 10000 });
        this.newUser.languageID = [];
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.newUser.languageID = [];
      });
  }

  hideRegModal() {
    $("#newUserModal").modal('hide');
  }

  get getFirstName() {
    return this.registerForm.get('firstName');
  }
  get getLastName() {
    return this.registerForm.get('lastName');
  }
  get getUsername() {
    return this.registerForm.get('username');
  }
  get getPhoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get getPassword() {
    return this.registerForm.get('password');
  }
  get getConfirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}
