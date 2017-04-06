import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

    { path: '', component: RegisterComponent  },
    { path: 'assessment', component: PyramidComponent },


];
