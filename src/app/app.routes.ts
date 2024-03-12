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
import { ActiveAccountComponent } from './Views/Alerts/active-account/active-account.component';
import { PermissionAuthComponent } from './Views/Alerts/permission-auth/permission-auth.component';

import { ActiveAccountGuard } from './Guards/Active_acount/active-acount.guard';
import { CodeVerifyGuard } from './Guards/Code_verified/code-verified.guard';
import { EmailVerifiedGuard } from './Guards/Email_verified/email-verified.guard';

import { AdminGuard } from './Guards/Admin/admin.guard';
import { GuestGuard } from './Guards/Guest/guest.guard';
import { UserGuard } from './Guards/User/user.guard';

import { AuthGuard } from './Guards/Auth/auth.guard';


import {
  AppointmentCancelledIndexComponent
} from "./Views/appointment-cancelled-index/appointment-cancelled-index.component";
import { SaleProdComponent } from './Views/Dashboard/sale-prod/sale-prod.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard, ActiveAccountGuard, CodeVerifyGuard, AdminGuard],
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
        path: 'saleProd',
        component: SaleProdComponent
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
        path: 'appointment-cancelled-index',
        component: AppointmentCancelledIndexComponent
      },
      {
        path:'appointment', loadChildren: () => import('./Modules/index-options/index-options.module').then(m => m.IndexOptionsModule)
      }

    ],
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
        path: 'Notpermission',
        component: PermissionAuthComponent
      },
      {
        path: 'AccountActiveNotFound',
        component: ActiveAccountComponent
      }
    ]
  }, {
    path: '**',
    component: NotfoundComponent
  }
];
