import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SurveyService} from '../survey.service';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {

  answers : Object = {
    q1  : "",
    q2  : "",
    q3  : "",
    q4  : "",
    q5  : "",
    q6  : "",
    q7  : "",
    q8  : "",
    q9  : "",
    q10 : "",
    q11 : "",
    q12 : "",
    q13 : "",
    q14 : "",
    q15 : ""
  }

  showForm     : Boolean = true;
  showComplete : Boolean = true;

  constructor(
    private survey : SurveyService,
    private _flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.showComplete = false;
    this.showForm = true;
  }

  submit(){
    this.survey.assess(this.answers)
      .subscribe((result) => {
        if (result){
          console.log("result: ", result)
          this.showComplete = !this.showComplete;
          this.showForm = !this.showForm;
        } else {
          console.log("no result")
        }
      },
      (error) => {
        if(error.status === 401) {
          this._flashMessagesService.show("Please fill all fields", {cssClass: "alert-danger", timeout:1000 })
        }
      }
    );
  }


}
