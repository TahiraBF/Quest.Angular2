import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  newClient : Object = {
    fullname : " ",
    email    : " ",
    phone    : " ",
    age      : " ",
    genOpt   : " "

  }

  date: DateModel;
  options: DatePickerOptions;

  constructor(
    private survey : SurveyService,
    private router : Router
  ) {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }

  reg(){
    this.survey.register(this.newClient)
      .subscribe((result) => {
          this.router.navigate(['/assessment']);
      }
    )
  }

}
