import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormLayoutComponent} from "../../Layouts/form-layout/form-layout.component";
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";
import {UserServiceService} from "../../Services/UserService/user-service.service";
import {PetInterface, PetResults} from "../../Models/Pet";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {AppointmentStoreInterface} from "../../Models/Appointment";
import {AppointmentRequestService} from "../../Services/AppointmentService/appointment-request.service";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";

@Component({
  selector: 'app-appointment-request',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormLayoutComponent,
    NgForOf,
    NgClass,
    KeyValuePipe,
    NgIf
  ],
  templateUrl: './appointment-request.component.html',
  styleUrl: './appointment-request.component.css',
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
export class AppointmentRequestComponent {

  petsR: PetResults | undefined;


  appointmentRequestForm = new FormGroup({
    pet_id: new FormControl('', [Validators.required]),
    appointment_date: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required]),
  })

  constructor(
    private petService: PetServiceService,
    private authService: AuthServiceService,
    private userService: UserServiceService,
    private appointmentService: AppointmentRequestService,
    private router: Router,
    private alertService: GlobalAlertService
  ) {
  }

  ngOnInit() {
    this.userService.getPetsByUser(Number(this.authService.getUserId())).subscribe(pets => {
      this.petsR = pets;
      console.log(this.petsR)
    })
  }

  public isSubmitting = false;
  backendErrors: any;

  storeAppointmentRequest(){
    this.isSubmitting = true;
    const formValue = this.appointmentRequestForm.value;
    const appointmentRequest: AppointmentStoreInterface = {
      pet_id: Number(formValue.pet_id) || 0,
      appointment_date: formValue.appointment_date || '',
      reason: formValue.reason || '',
      user_id: Number(this.authService.getUserId()) || 0,
    };
    this.appointmentService.storeAppointment(appointmentRequest).subscribe(
      res => {
        this.alertService.showAlert('Cita solicitada con éxito');
        this.isSubmitting = false;
        this.router.navigate(['/dashboard/user/appointments']);
      },
      err => {
        this.isSubmitting = false;
        if (err.error.errors){
          this.backendErrors = err.error.errors;
        }
      }
    )
  }

}
