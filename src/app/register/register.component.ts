import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  newClient : Object = {
    fullname : "",
    email    : "",
    phone    : "",
    age      : "",
    genOpt   : ""

  }

  date: DateModel;
  options: DatePickerOptions;

  constructor(
    private survey : SurveyService,
    private router : Router,
    private _flashMessagesService : FlashMessagesService
  ) {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }

  reg(){
    this.survey.register(this.newClient)
      .subscribe((result) => {
        this.router.navigate(['/assessment']);
      },
      // (error) => {
      //   if(error.status === 401) {
      //     this._flashMessagesService.show("Please fill all fields", {cssClass: "alert-danger", timeout:3000 })
      //   }
      // }
    )
  }

}
