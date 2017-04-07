import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SurveyService {
  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = 'https://pre-session-survey.herokuapp.com';

  public user: any;


  constructor(
    private http: Http,
    private router: Router,
  ) {
    this.user = localStorage.getItem('user');
 }

  register(user) {
    return this.http.post(`${this.BASE_URL}/`, user)
      .map((response) => response.json())
      .map((response) => {
        this.user = response.user

        if (response.user){
          localStorage.setItem('user', JSON.stringify(response.user) );
          console.log("user:", this.user);
          console.log("loc: ", localStorage);
        }

      })
      .catch((err) => Observable.throw(err));
  }

  assess(answers) {
    let headers = new Headers({user: this.user._id});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.BASE_URL}/assessment`, answers, options)
      .map((response) => response.json())
  }

}
