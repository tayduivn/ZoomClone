import { Roles } from './../../models/BaseViewModel';
import { LanguageService } from './../../services/language.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Language } from 'src/app/models/tbllanguage';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { BaseCrudApi } from 'src/app/models/BaseViewModel';
import { TokenService } from 'src/app/services/user/token.service';
import { NzMessageService } from 'ng-zorro-antd/message';
declare var $: any;

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent extends BaseCrudApi<Language> implements OnInit , OnDestroy {

  language: Language = new Language();
  totalItems = "";


  constructor(
    private languageServices: LanguageService,
    private router: Router, 
    private toastrService: ToastrService,
    private tokenService: TokenService,
    private message: NzMessageService) 
    { 
      super();
      this.allowedRoles = this.tokenService.getUserRoles();
    }

  ngOnInit(): void {
    this.getItems();
  }

  onLanguageSubmitForm(form: NgForm)
  {
    this.isSaving = true;
    this.add = this.languageServices.createLanguage(this.language)
    .subscribe(res => {
      if(res.isSuccess){
        // Make notification to user for saving data
        this.isSaved = true;
      }else{
        this.isError = true;
        this.errorMessage = res.message;
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error);
      this.isError = true;
      this.errorMessage = error.message;
      this.isSaving = false;
      if(error.status == 401){
        this.router.navigateByUrl("/Login");
      }
    },
    () => {
      form.reset();
      this.language = new Language();
      this.isSaving = false;
      this.isSaved = true;
      this.getItems();
    });
  }
  
  showFormModal(){
    this.isSaved = false;
    this.isError = false;
    $("#languageModal").modal('show');
  }

  getItems(page: number = 1){
    this.isLoading = true;
    this.add = this.languageServices.getLanguages(page,this.query)
    .subscribe(res => {
      if(res.isSuccess){
        this.items = res.listModel!,
        this.pager = res.pager!
        this.totalItems = res.message!;
      }else{
        this.isError = true;
        this.errorMessage = res.message;
        this.toastrService.error(res.message,"Error: ");
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error.error);
      this.isError = true;
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
    this.query = '';
    this.getItems();
  }
  ngOnDestroy(): void {
    this.dispose();
  }
  confirmRemoved(id: any){
    if(confirm('Are you sure you want to delete this language ?')){
      console.log(`%c${id}`,'color:green;');
      this.add = this.languageServices.removeLanguage(id).subscribe(res => {
        if(res.isSuccess) {
          this.message.success(`Language removed successfully.`);
        }else{
          this.message.error(`Opps! something bad happen.`);
        }
      })
    }
  }
}
