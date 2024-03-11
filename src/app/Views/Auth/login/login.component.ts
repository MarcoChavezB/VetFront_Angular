import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserLogin } from '../../../Models/user';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';
import { UserServiceService } from '../../../Services/UserService/user-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('shake', [
      transition('* => *', [ 
        animate('1s', keyframes([
          style({ transform: 'translateX(0)' }),
          style({ transform: 'translateX(-5px)' }), 
          style({ transform: 'translateX(5px)' }), 
          style({ transform: 'translateX(-7px)' }),
          style({ transform: 'translateX(7px)' }), 
          style({ transform: 'translateX(-10px)' }),
          style({ transform: 'translateX(0)' }),
        ]))
      ])
    ])
  ]
})
export class LoginComponent {
  public email = '';
  public password = '';
  public notfound = false;
  public error = false;
  public passwordVerify = false;
  loading: boolean = false;

  constructor( 
    private userService: UserServiceService,
    private authService: AuthServiceService,
    private router: Router
    ) {
    this.email = '';
    this.password = '';
  }

  // ngOnInit() {
  //   this.authService.isAuthenticated().subscribe(isAuthenticated => {
  //     if (isAuthenticated) {
  //       this.router.navigate(['code']);
  //     }
  //   });
  // }

  onSubmit() {
    this.notfound = false;
    this.error = false;
    this.passwordVerify = false;
    const user: UserLogin = {
      email: this.email || '',
      password: this.password || '',
    };
    this.userService.loginUser(user).subscribe(
      res => {
        this.authService.saveTokenResponse(res.jwt, res.data)
        this.checkCode()
      },
      error => {
        if (error.status == 404){
          this.notfound = true;
        } else if(error.status == 401) {
          this.passwordVerify = true;
        }else {
          this.error = true
        }
      }
    );  
  }

  sendEmail() {
    this.loading = true;
    this.userService.sendEmailCode(this.authService.getUserId()).subscribe(
      res => {
        this.loading = false;
        this.router.navigate(['code']);
      },
      error => {
        this.loading = false;
      }
    );
  }

  checkCode(){
    this.userService.checkCodeAuth(this.authService.getUserId()).subscribe(
      res => {
        if (res.isActive == 1) {
          this.router.navigate(['dashboard']);
        }else{
          this.sendEmail()
        }
      }
    );
  }
  
}
