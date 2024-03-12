import { Routes } from '@angular/router';
import { LoginComponent } from './Views/Auth/login/login.component';
import { CodeVerifyComponent } from './Views/Auth/code-verify/code-verify.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { NotfoundComponent } from './Views/notfound/notfound.component';
import { MainComponent } from './Views/Dashboard/main/main.component';
import { AuthComponent } from './Layouts/auth/auth.component';
import {AppointmentRequestComponent} from "./Views/appointment-request/appointment-request.component";
import {AppointmentIndexComponent} from "./Views/appointment-index/appointment-index.component";
import {RegisterPetFormComponent} from "./Views/register-pet-form/register-pet-form.component";
import { ProductsComponent } from './Views/Dashboard/products/products.component';
import { AgregarProdComponent } from './Views/Dashboard/agregar-prod/agregar-prod.component';

import {
  ConfirmCompletedAppointmentComponent
} from "./Views/ConfirmNotifications/confirm-completed-appointment/confirm-completed-appointment.component";
import {
  AppointmentCancelledIndexComponent
} from "./Views/appointment-cancelled-index/appointment-cancelled-index.component";
import {
  ConfirmReopenAppointmentComponent
} from "./Views/ConfirmNotifications/confirm-reopen-appointment/confirm-reopen-appointment.component";
import {
  ConfirmCancelAppointmentComponent
} from "./Views/ConfirmNotifications/confirm-cancel-appointment/confirm-cancel-appointment.component";
import { AuthGuard } from './Guards/Auth/auth.guard';
import { ModifyProdComponent } from './Views/Dashboard/modify-prod/modify-prod.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'addprod',
        component: AgregarProdComponent
      },
      {
        path: 'modifyProd',
        component: ModifyProdComponent
      }
    ],
    canActivate: [AuthGuard]
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
      },
      {
        path: 'appointment-cancelled-index',
        component: AppointmentCancelledIndexComponent
      },
      {
        path: 'confirm-reopen-appointment/:id',
        component: ConfirmReopenAppointmentComponent
      },
      {
        path: 'confirm-cancel-appointment/:id',
        component: ConfirmCancelAppointmentComponent
      }
    ]
  }
];

export const routesAuth: Routes= [
  {
    path: 'dashboard',
  },
  {
    path: 'home',
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]
