import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { SurveyService} from '../survey.service';


@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {

  answers : Object = {
    q1  : " ",
    q2  : " ",
    q3  : " ",
    q4  : " ",
    q5  : " ",
    q6  : " ",
    q7  : " ",
    q8  : " ",
    q9  : " ",
    q10 : " ",
    q11 : " ",
    q12 : " ",
    q13 : " ",
    q14 : " ",
    q15 : " "
  }

  constructor(
    private survey : SurveyService
  ) { }

  ngOnInit() {
  }

  submit(){
    this.survey.assess(this.answers)
      .subscribe((result) => {
        if (result){
          console.log("result: ", result)
        } else {
          console.log("no result")
        }
      })
  }

}
