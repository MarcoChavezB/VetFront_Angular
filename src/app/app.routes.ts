import { Routes } from '@angular/router';
import { LoginComponent } from './Views/Auth/login/login.component';
import { CodeVerifyComponent } from './Views/Auth/code-verify/code-verify.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { NotfoundComponent } from './Views/notfound/notfound.component';
import { MainComponent } from './Views/Dashboard/main/main.component';
import { AuthComponent } from './Layouts/auth/auth.component';
import {RegisterPetFormComponent} from "./Views/register-pet-form/register-pet-form.component";
import { ProductsComponent } from './Views/Dashboard/products/products.component';
import { AgregarProdComponent } from './Views/Dashboard/agregar-prod/agregar-prod.component';

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
      }
    ]
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
