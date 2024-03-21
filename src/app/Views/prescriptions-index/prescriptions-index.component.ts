import { Component } from '@angular/core';
import {PrescriptionServiceService} from "../../Services/PrescriptionService/prescription-service.service";
import {NgForOf, NgIf} from "@angular/common";

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
  ){}

  ngOnInit() {
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
