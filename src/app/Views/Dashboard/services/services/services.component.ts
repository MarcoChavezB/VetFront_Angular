import { Component } from '@angular/core';
import { service } from '../../../../Models/services';
import { ServiciosService } from '../../../../Services/ServiciosService/servicios.service';
import { CommonModule } from '@angular/common';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { ServiceupdateComponent } from '../serviceupdate/serviceupdate/serviceupdate.component';
import { AuthServiceService } from '../../../../Services/AuthService/auth-service.service';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    AlertConfirmationComponent,
    AlertSuccessComponent,
    ServiceupdateComponent,
    CommonModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services: service[] = []

  constructor(
    private readonly ProdService: ServiciosService,
    private readonly authservice: AuthServiceService,
    ) {
    
  }
  role:number | null = 0

  getrole(){
    this.role = this.authservice.getRole()
  }

  ngOnInit(): void {
    this.getServices();
    this.getrole();
  }
  
  nombresPropiedades: string[] = [];
  modifyId: number = 0;
  modificar: boolean = false;
  alertDelete: boolean = false;
  alertSucces: boolean = false;
  deleteId: number = 0;
  objectProd: any = {}
  existService: boolean = true;

  

  getServices() {
    this.ProdService.getServices().subscribe(
      (data) => {
        this.services = data.services;
        if(this.services.length == 0){
          this.existService = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modifyservice(id: number) {
    this.ProdService.getServiceId(id).subscribe(
      (data) => {
        this.objectProd = data;
        this.modifyId = id;
        this.modificar = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  closeModify() {
    this.modificar = false;
  }

  showAlertDelete(id: number){
    this.alertDelete = true;
    this.deleteId = id;
  }

  closeAlert(){
    this.alertDelete = false;
  }

  confirmDelete(){
    this.ProdService.deleteService(this.deleteId).subscribe(
      (res) => {
        this.alertDelete = false;
        this.alertSucces = true;
        this.getServices();
      },
      (err) => {
        console.log(err)
      }
    )
  }

  closeSuccess(){
    this.alertSucces = false;
  }

}
