import { Routes } from '@angular/router';
import { LoginComponent } from './Views/Auth/login/login.component';
import { CodeVerifyComponent } from './Views/Auth/code-verify/code-verify.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { NotfoundComponent } from './Views/notfound/notfound.component';
import { MainComponent } from './Views/Dashboard/main/main.component';
import { AuthComponent } from './Layouts/auth/auth.component';
import {AppointmentRequestComponent} from "./Views/appointment-request/appointment-request.component";
import {AppointmentIndexComponent} from "./Views/appointment-index/appointment-index.component";
import {RegisterPetFormComponent} from "./Views/register-pet-form/register-pet-form.component";
import {
  ConfirmCompletedAppointmentComponent
} from "./Views/confirm-completed-appointment/confirm-completed-appointment.component";
export const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent
  },
  {
    path: '',
    component: AuthComponent,

    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'code',
        component: CodeVerifyComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register-pet',
        component: RegisterPetFormComponent
      },
      {
        path: 'appointment-request',
        component: AppointmentRequestComponent
      },
      {
        path: 'appointment-index',
        component: AppointmentIndexComponent
      },
      {
        path: 'confirm-completed-appointment/:id',
        component: ConfirmCompletedAppointmentComponent
      }
    ]
  }
];

export const routesAuth: Routes= [
  {
    path: 'dashboard',


  },
  {
    path: '**',
    component: NotfoundComponent
  }
]
