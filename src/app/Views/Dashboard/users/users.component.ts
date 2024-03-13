import { Component } from '@angular/core';
import { UserServiceService } from '../../../Services/UserService/user-service.service';
import { UserInterface } from '../../../Models/user';
import { CommonModule } from '@angular/common';
import { AlertConfirmationComponent } from '../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertErrorComponent } from '../../../Components/Alerts/alert-error/alert-error.component';
import { AlertSuccessComponent } from '../../../Components/Alerts/alert-success/alert-success.component';

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
  showSuccess: boolean = false;
  showError: boolean = false;
  showConfirmation: boolean = false;
  users: UserInterface[] = []
  constructor(
    private readonly userService: UserServiceService
  ){}

  ngOnInit(){
    this.getUsers()
  }
  getUsers(){
    this.userService.getUsers().subscribe(
        (res) => {
            this.users = res.Users;
        },
        (err) => {
            console.log("error", err);
        }
    );
}

showDesactivateConfirmation(nombre: string, id:number){
  this.showAlertConfirm('¿Está seguro de desactivar al usuario ' + nombre + '?');
  this.userId = id;
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
      this.showAlert('Usuario desactivado', 'success');
    },
    (err) => {
      this.showConfirmation = false;
      console.log(err);
      this.showAlert('Error al desactivar usuario', 'error');
    }
  )
}

}