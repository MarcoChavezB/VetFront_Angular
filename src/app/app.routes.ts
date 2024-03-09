import { Routes } from '@angular/router';
import { AuthComponent } from './Layouts/auth/auth.component';
import { LoginComponent } from './Views/Auth/login/login.component';
import { CodeVerifyComponent } from './Views/Auth/code-verify/code-verify.component';
import { RegisterComponent } from './Views/Auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'code',
        component: CodeVerifyComponent
      },
      {
        path: 'registers',
        component: RegisterComponent
      }
    ]
  }
];
