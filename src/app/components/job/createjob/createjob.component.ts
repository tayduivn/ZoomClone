import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/models/job';
import { Language } from './../../../models/tbllanguage';
import { LanguageService } from './../../../services/language.service';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BaseCrudApi } from 'src/app/models/BaseViewModel';
import { TokenService } from 'src/app/services/user/token.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
declare var $: any;


@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent extends BaseCrudApi<Language> implements OnInit, DoCheck, OnChanges, OnDestroy {

  CurrentIndex: number = 0;
  job: Job = new Job();
  languageData: any[] = [];
  keyword = "name";

  isOnline = false;
  OnlineToggle() {
    if (this.isOnline) {
      this.isOnline = false;
      this.job.jobType = 1;
    } else {
      this.isOnline = true;
      this.job.jobType = 0;
    }
  };

  isLanguageSelected = false;
  isMeetingStatusSelected = false;

  date = new Date();
  startTime = new Date();
  endTime = new Date();
  timeDefaultValue = new Date();

  constructor(private languageService: LanguageService, private i18n: NzI18nService, private jobService: JobService,
    private router: Router, private tokenService: TokenService, private message: NzMessageService) {
    super();
  }
  ngOnInit(): void { }
  // * Forms Submissions
  onSubmitForm(form: NgForm) {
    console.log(JSON.stringify(this.job));
    this.isSaving = true;
    this.add = this.jobService.createJob(this.job)
      .subscribe(res => {
        if (res.isSuccess) {
          // Make notification to user for saving data
          this.message.create('success', "Your REQUEST have been generated successfully", { nzDuration: 10000 });
        } else {
          this.message.create('error', "Opps something went wrong", { nzDuration: 10000 });
          console.log(JSON.stringify(res));
        }
      },
        (error: HttpErrorResponse) => {
          this.message.create('error', "Opps something went wrong", {
            nzDuration: 10000
          });
          console.log(error.error);
          this.isError = true;
          this.errorMessage = error.message;
          if (error.status == 401) {
            this.router.navigateByUrl("/Login");
          }
          this.isSaving = false;
        },
        () => {
          this.isLoading = false;
          this.isSaving = false;
          this.isSaved = true;
          form.reset();
        });
  }
  // * Language Auto Search
  selectEventLanguage(item: any) {
    this.job.languageID = item.id;
  }
  onChangeSearchLanguage(val: string) {
    this.add = this.languageService.getLanguagesByName(val).subscribe(res => {
      this.languageData = res;
    });
  }
  // * Language Auto Search
  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;
  public handleAddressChange(address: Address) {
    this.job.locationName = address.formatted_address;
    // Do some stuff
  }
  selectedLanguage() {
    this.isLanguageSelected = true;
  }
  nextOnLanguageSelected() {
    if (this.CurrentIndex == 0) {
      this.CurrentIndex++;
      this.isMeetingStatusSelected = true;
    }
  }
  nextOnJobType() {
    if (this.CurrentIndex == 1) {
      this.CurrentIndex++;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
  }
  ngDoCheck(): void {
    console.log(this.job.startDateTime + "  -  " + this.job.endDateTime);

    if (this.job.startDateTime && this.job.endDateTime && this.job.languageID) {

      let firstDate: Date = new Date(this.job.startDateTime.toDateString());
      let secondDate: Date = new Date(this.job.endDateTime.toDateString());
      var diff = Math.abs(Number(this.job.endDateTime) - Number(this.job.startDateTime));
      var minutes = Math.floor((diff / 1000) / 60);
      if (minutes < 15) {
        this.isError = true;
        this.errorMessage = "Please select atleast 15 minutes session.";
      } else if (this.job.startDateTime < this.date) {
        this.isError = true;
        this.errorMessage = "You cannot select past Time.";
      } else if (secondDate < firstDate) {
        this.job.endDateTime = this.job.startDateTime;
      } else if (secondDate > firstDate) {
        this.job.endDateTime = this.job.startDateTime;
      }
      else if (minutes > 240) {
        this.isError = true;
        this.errorMessage = "Please select maximum 4 hours session.";
      }
      else {
        this.isError = false;
        this.isLanguageSelected = true;
      }
    }
    if (this.job.jobType) {
      this.job.jobType = Number(this.job.jobType);
    }
  }
  ngOnDestroy(): void {
    this.dispose();
  }
}
