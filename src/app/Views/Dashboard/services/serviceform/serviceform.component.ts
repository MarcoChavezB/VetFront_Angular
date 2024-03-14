import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { AlertErrorComponent } from '../../../../Components/Alerts/alert-error/alert-error.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { RouterLink } from '@angular/router';
import { ServiciosService } from '../../../../Services/ServiciosService/servicios.service';
import { newservice } from '../../../../Models/services';
@Component({
  selector: 'app-serviceform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertErrorComponent,
    AlertSuccessComponent,
    RouterLink
  ],
  templateUrl: './serviceform.component.html',
  styleUrl: './serviceform.component.css',
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
export class ServiceformComponent {
  constructor(
    private readonly servicioservice: ServiciosService
  ){}

  newserv:newservice = {
    name: '',
    description: '',
    price:''
  }

  nameError:string = ''
  showNameError:boolean = false
  hasError: boolean = false;
  showSuccess: boolean = false;
  errorMessage: string = ''
  successMessage: string = ''
  disableButton: boolean = true;

  
  addService() {
    this.servicioservice.storeService(this.newserv)
      .subscribe(
        (res) => {
          this.showAlertSuccess('Servicio agregado correctamente');
          this.newserv = {
            name: '',
            description: '',
            price:''
          }
        },
        (err) => {
          if (err && err.error && err.error.error) {
            const firstError = this.getFirstError(err.error.error);
            this.showAlert(firstError);
          } else {
            console.error(err);
          }
        }
      );
  }


  getFirstError(errors: Record<string, string[]>): string {
    const firstErrorKey = Object.keys(errors)[0];
    return errors[firstErrorKey][0];
  }
  
  showAlert(message: string) {
    this.hasError = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.hasError = false;
    }, 2000);
  }

  showAlertSuccess(message: string) {
    this.showSuccess = true;
    this.successMessage = message;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }
}
