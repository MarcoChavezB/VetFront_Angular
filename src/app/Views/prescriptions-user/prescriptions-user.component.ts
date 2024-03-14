import { Component } from '@angular/core';
import {PrescriptionServiceService} from "../../Services/PrescriptionService/prescription-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";

@Component({
  selector: 'app-prescriptions-user',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './prescriptions-user.component.html',
  styleUrl: './prescriptions-user.component.css'
})
export class PrescriptionsUserComponent {
  prescriptionsR: any;
  constructor(
    private prescriptionService: PrescriptionServiceService,
    private authService: AuthServiceService
  ){}

  ngOnInit() {
    this.prescriptionService.getUserPrescriptions(this.authService.getUserId()).subscribe(prescriptions => {
      this.prescriptionsR = prescriptions;
    }, err =>{
      if (!err.error.success){
        this.prescriptionsR = {prescriptions: []};
      }
    });
  }

}
