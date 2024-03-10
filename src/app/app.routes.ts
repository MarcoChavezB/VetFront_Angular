import { Routes } from '@angular/router';
import { AuthComponent } from './Layouts/auth/auth.component';
import { LoginComponent } from './Views/Auth/login/login.component';
import { CodeVerifyComponent } from './Views/Auth/code-verify/code-verify.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { NotfoundComponent } from './Views/notfound/notfound.component';

export const routes: Routes = [
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