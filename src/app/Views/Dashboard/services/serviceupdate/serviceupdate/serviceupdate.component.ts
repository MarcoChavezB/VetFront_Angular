import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertSuccessTopComponent } from '../../../../../Components/Alerts/alert-success-top/alert-success-top.component';
import { AlertErrorTopComponent } from '../../../../../Components/Alerts/alert-error-top/alert-error-top.component';
import { ServiciosService } from '../../../../../Services/ServiciosService/servicios.service';
import { service } from '../../../../../Models/services';

@Component({
  selector: 'app-serviceupdate',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertSuccessTopComponent,
    AlertErrorTopComponent
  ],
  templateUrl: './serviceupdate.component.html',
  styleUrl: './serviceupdate.component.css'
})
export class ServiceupdateComponent {

  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  serv: service = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    updated_at: '',
    created_at: '',
  }

  hasError: boolean = false;
  disableButton: boolean = true;

  showSuccess: boolean = false;
  showError: boolean = false;
  errorMessage: string = ''
  successMessage: string = ''

  @Input() idModify: number = 0
  @Input() objectProd: any = {}

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private readonly servicioservice: ServiciosService
  ){}

  
  ngOnInit(){
    this.inizializeData()
  }


  modify(){
    this.servicioservice.modifyService(this.serv).subscribe(
      (res) => {
        this.showAlertSuccess('se ha actualizado correctamente')
        this.refresh.emit(true)
      },
      (err) => {
          if (err && err.error && err.error.error) {
            const firstError = this.getFirstError(err.error.error);
            this.showAlert(firstError);
          } else {
            this.showAlert(err.error.message)
          }
      }
    )
  }

  cancel(){
    this.close.emit(true) 
  }

  inizializeData(){
    this.serv.id = this.objectProd.id
    this.serv.name = this.objectProd.name
    this.serv.price = this.objectProd.price
    this.serv.description = this.objectProd.description
    this.serv.updated_at = this.objectProd.updated_at
    this.serv.created_at = this.objectProd.created_at
  }


  getFirstError(errors: Record<string, string[]>): string {
    const firstErrorKey = Object.keys(errors)[0];
    return errors[firstErrorKey][0];
  }
  
  showAlert(message: string) {
    this.showError = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.showError = false;
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
