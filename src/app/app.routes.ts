import { Routes } from '@angular/router';
import { LoginComponent } from './Views/Auth/login/login.component';
import { CodeVerifyComponent } from './Views/Auth/code-verify/code-verify.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { NotfoundComponent } from './Views/notfound/notfound.component';
import { MainComponent } from './Views/Dashboard/main/main.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent
  },
  {
    path: '',
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