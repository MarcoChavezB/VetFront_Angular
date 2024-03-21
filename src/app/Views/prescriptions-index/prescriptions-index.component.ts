import { Component } from '@angular/core';
import {PrescriptionServiceService} from "../../Services/PrescriptionService/prescription-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";

@Component({
  selector: 'app-prescriptions-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './prescriptions-index.component.html',
  styleUrl: './prescriptions-index.component.css'
})
export class PrescriptionsIndexComponent {
  prescriptionsR: any;

  constructor(
    private prescriptionService: PrescriptionServiceService,
    private readonly authservice: AuthServiceService,
  ){}

  role:number | null = 0

  getrole(){
    this.role = this.authservice.getRole()
  }

  ngOnInit() {
    this.getrole()
    this.prescriptionService.getPrescriptions().subscribe(prescriptions => {
      this.prescriptionsR = prescriptions;
    },
      err => {
        if (!err.error.success){
          this.prescriptionsR = {prescriptions: []};
        }
      });
  }

  findByName(name: string){
    this.prescriptionService.findPrescriptionByName(name).subscribe(prescriptions => {
      this.prescriptionsR = prescriptions;
    },
      err => {
        if (!err.error.success){
          this.prescriptionsR = {prescriptions: []};
        }
      });
  }

}
