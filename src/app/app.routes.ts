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
import { ServiceformComponent } from './Views/Dashboard/services/serviceform/serviceform.component';

import { AdminGuard } from './Guards/Admin/admin.guard';
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
import { SalesComponent } from './Views/Dashboard/products/sales/sales.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard, CodeVerifyGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'ventas/:id',
        component: SalesComponent
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: AllProductsComponent
          },
          {
            path: 'desactivate-products',
            component: DesactivateProductsComponent,
            canActivate: [AdminGuard]
          },
        ]
      },
      {
        path: 'addprod',
        component: AgregarProdComponent,
        canActivate: [UserGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'register-pet',
        component: RegisterPetFormComponent,
        canActivate: [UserGuard]
      },
      {
        path: 'appointment-request',
        component: AppointmentRequestComponent,
        canActivate: [UserGuard]
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
        path:'appointment', loadChildren: () => import('./Modules/index-options/index-options.module').then(m => m.IndexOptionsModule), //admin
        canActivate: [UserGuard]

      },
      {
        path: 'user-pets',
        component: UserPetsComponent,
        canActivate: [UserGuard]
      },
      {
        path: 'species-index',
        component: SpeciesIndexComponent
      },
      {
        path: 'prescriptions-index',
        component: PrescriptionsIndexComponent,
        canActivate: [UserGuard]
      },
      {
        path: 'services',
        component: ServicesComponent 
      },
      {
        path: 'servicesstore',
        component: ServiceformComponent,
        canActivate: [UserGuard]
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
