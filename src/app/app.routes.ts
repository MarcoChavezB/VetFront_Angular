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
import { ServicesComponent } from './Views/Dashboard/services/services/services.component';
import { CodeVerifyGuard } from './Guards/Code_verified/code-verified.guard';

import { AdminGuard } from './Guards/Admin/admin.guard';
import { GuestGuard } from './Guards/Guest/guest.guard';
import { UserGuard } from './Guards/User/user.guard';

import { AuthGuard } from './Guards/Auth/auth.guard';

import {
  AppointmentCancelledIndexComponent
} from "./Views/appointment-cancelled-index/appointment-cancelled-index.component";
import { UsersComponent } from './Views/Dashboard/users/users.component';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { AllProductsComponent } from './Views/Dashboard/products/all-products/all-products.component';
import { DesactivateProductsComponent } from './Views/Dashboard/products/desactivate-products/desactivate-products.component';

import {UserPetsComponent} from "./Views/user-pets/user-pets.component";
import {SpeciesIndexComponent} from "./Views/species-index/species-index.component";
import {PrescriptionsIndexComponent} from "./Views/prescriptions-index/prescriptions-index.component";

export const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard, CodeVerifyGuard, GuestGuard],
    children: [
      {
        // admin
        path: '',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            // admin
            path: '',
            component: AllProductsComponent
          },
          {
            // admin
            path: 'desactivate-products',
            component: DesactivateProductsComponent
          },
        ]
      },
      {
        // admin
        path: 'addprod',
        component: AgregarProdComponent
      },
      {
        // admin
        path: 'users',
        component: UsersComponent
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
        component: AppointmentIndexComponent // admin
      },
      {
        path: 'appointment-cancelled-index',
        component: AppointmentCancelledIndexComponent // admin
      },
      {
        path:'appointment', loadChildren: () => import('./Modules/index-options/index-options.module').then(m => m.IndexOptionsModule) //admin
      },
      {
        path: 'user-pets',
        component: UserPetsComponent
      },
      {
        path: 'species-index',
        component: SpeciesIndexComponent // admin
      },
      {
        path: 'prescriptions-index',
        component: PrescriptionsIndexComponent //admin
      },
      {
        path: 'services',
        component: ServicesComponent // admin
      },
      {
        path: 'user', loadChildren: () => import('./Modules/user-routes/user-routes.module').then(m => m.UserRoutesModule)
      },
      {
        path: 'admin', loadChildren: () => import('./Modules/admin-routes/admin-routes.module').then(m => m.AdminRoutesModule)
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
      }
    ]
  }, {
    path:'',
    children:
    [ {
        path: 'Notpermission',
        component: PermissionAuthComponent
      },
      {
        path: 'AccountActiveNotFound',
        component: ActiveAccountComponent
      }
    ]
  },{
    path: '**',
    component: NotfoundComponent
  }
];
