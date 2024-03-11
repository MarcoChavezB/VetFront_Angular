import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Router, RouterLink} from '@angular/router';
import { UserServiceService } from '../../../Services/UserService/user-service.service';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';
import { UserRegistrationInterface } from '../../../Models/user';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf, NgClass, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
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
export class RegisterComponent {

  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  errors: any;

  // ngOnInit() {
  //   this.authService.isAuthenticated().subscribe(isAuthenticated => {
  //     if (isAuthenticated) {
  //       this.router.navigate(['']);
  //     }
  //   });
  // }

  constructor(
    private authService: AuthServiceService,
    private regService: UserServiceService,
    private router: Router
  ) {}

  public isSubmitting = false;
 
  onSubmit(){
    this.isSubmitting = true;
    const formValue = this.registerForm.value;
    const user: UserRegistrationInterface = {
      name: formValue.name || '',
      email: formValue.email || '',
      password: formValue.password || '',
    };
    this.regService.storeUser(user).subscribe(
      res => {
        this.router.navigate(['/login']);
        this.isSubmitting = false;
        alert('¡Registrado correctamente!')
      },
      err => {
        this.isSubmitting = false;
        if (err.error.error){
          this.errors = err.error.error;
        }
      }
    );
  }

}
