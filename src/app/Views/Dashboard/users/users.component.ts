import { Component } from '@angular/core';
import { UserServiceService } from '../../../Services/UserService/user-service.service';
import { userinterfacelog } from '../../../Models/user';
import { CommonModule } from '@angular/common';
import { AlertConfirmationComponent } from '../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertErrorComponent } from '../../../Components/Alerts/alert-error/alert-error.component';
import { AlertSuccessComponent } from '../../../Components/Alerts/alert-success/alert-success.component';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    AlertConfirmationComponent,
    AlertSuccessComponent,
    AlertErrorComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  message: string = ''
  userId: number = 0;
  userIdrol: number = 0;
  showSuccess: boolean = false;
  showError: boolean = false;
  showConfirmation: boolean = false;
  showConfirmationrol: boolean = false;
  users: userinterfacelog[] = []
  showSuccessrol: boolean = false;
  guest: boolean = false;
  admin: boolean = false;
  user: boolean = false;


  constructor(
    private readonly userService: UserServiceService,
    private authService: AuthServiceService,
  ){}

  ngOnInit(){
    this.getUsers()
    this.checkRole()
  }

  
  
  checkRole() {
    const role = this.authService.getRole();
    switch (role) {
      case 0:
        this.guest = true;
        this.user = false;
        this.admin = false;
        break;
      case 1:
        this.guest = false;
        this.user = true;
        this.admin = false;
        break;
      case 2:
        this.guest = false;
        this.user = false;
        this.admin = true;
        break;
      default:
        this.guest = false;
        this.user = false;
        this.admin = false;
        break;
    }
  }
  getUsers(){
    this.userService.getUsersrol().subscribe(
        (res) => {
            this.users = res.Users;
            console.log(this.users)
        },
        (err) => {
            console.log("error", err);
        }
    );
}

showDesactivateConfirmation(nombre: string, id:number){
  this.showAlertConfirm('¿Está seguro de cambiar de status al usuario ' + nombre + '?');
  this.userId = id;
}

showRolConfirmation(nombre: string, id:number){
  this.showAlertConfirmrol('¿Está seguro de cambiar de rol al usuario ' + nombre + '?');
  this.userIdrol = id;
}


showAlert(message:string, type: string){
  switch(type){
    case 'success':
      this.showSuccess = true;
      this.message = message;
      break;
    case 'error':
      this.showError = true;
      this.message = message;
      break;
  }
  setTimeout(() => {
    this.showSuccess = false;
    this.showError = false;
  }, 3000);
}

showAlertConfirm(message: string){
  this.showConfirmation = true;
  this.message = message;
}

showAlertConfirmrol(message: string){
  this.showConfirmationrol = true;
  this.message = message;
}

closeAlertConfirmrol(){
  this.showConfirmationrol = false;
}

closeAlertSuccessrol(){
  this.showSuccessrol = false;
}

closeAlertConfirm(){
  this.showConfirmation = false;
}

closeAlertSuccess(){
  this.showSuccess = false;
}

confirmDesactivate(){
  this.userService.desactivateAccount(this.userId).subscribe(
    (res) => {
      this.showConfirmation = false;
      this.getUsers();
      this.showAlert('Usuario cambiado de status', 'success');
    },
    (err) => {
      this.showConfirmation = false;
      console.log(err);
      this.showAlert('Error al cambiar de status al usuario', 'error');
    }
  )
}


confirmChangerol(){
  this.userService.changerol(this.userIdrol).subscribe(
    (res) => {
      this.showConfirmationrol = false;
      this.getUsers();
      this.showAlert('Usuario cambiado de rol', 'success');
    },
    (err) => {
      this.showConfirmationrol = false;
      console.log(err);
      this.showAlert('Error al cambiar de rol al usuario', 'error');
    }
  )
}

}