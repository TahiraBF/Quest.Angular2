import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';
import { routes        } from './app.routing';
import { Observable } from 'rxjs/Rx';
import { SurveyService } from './survey.service';
import { DatePickerModule } from 'ng2-datepicker';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    PyramidComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    FlashMessagesModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
