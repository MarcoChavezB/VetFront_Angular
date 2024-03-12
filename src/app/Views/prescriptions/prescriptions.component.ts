import { Component } from '@angular/core';
import {PrescriptionServiceService} from "../../Services/PrescriptionService/prescription-service.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PrescriptionStoreInterface} from "../../Models/Prescription";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    RouterLink
  ],
  templateUrl: './prescriptions.component.html',
  styleUrl: './prescriptions.component.css'
})
export class PrescriptionsComponent {

  public isSubmitting = false;
  appointmentId: number | undefined;
  backendErrors: any;

  constructor(
    private prescriptionService: PrescriptionServiceService,
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appointmentId = params['id'];
      console.log(this.appointmentId)
    });
  }

  prescrriptionForm = new FormGroup({
    diagnosis: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    observations: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    indications: new FormControl('', [Validators.required, Validators.maxLength(255)]),
  })

  storePrescription() {
    this.isSubmitting = true;
    const formValue = this.prescrriptionForm.value;
    const prescription: PrescriptionStoreInterface = {
      diagnosis: formValue.diagnosis || '',
      observations: formValue.observations || '',
      indications: formValue.indications || '',
      vet_id: Number(this.authService.getUserId()) || 0,
      vet_appointment_id: this.appointmentId || 0
    }

    this.prescriptionService.storePrescription(prescription).subscribe(
      res => {
        this.isSubmitting = false;
      },
      err => {
        this.isSubmitting = false;
        if (err.error.errors) {
          this.backendErrors = err.error.errors;
        }
      }
    )
  }

}
