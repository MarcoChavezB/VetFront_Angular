import { Component } from '@angular/core';
import {AppointmentResults} from "../../Models/Appointment";
import {AppointmentRequestService} from "../../Services/AppointmentService/appointment-request.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-appointment-cancelled-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './appointment-cancelled-index.component.html',
  styleUrl: './appointment-cancelled-index.component.css'
})
export class AppointmentCancelledIndexComponent {

  appointmentsR: AppointmentResults | undefined;

  constructor(
    private appointmentService: AppointmentRequestService
  ) {
  }

  ngOnInit() {
    this.appointmentService.getCancelledAppointments().subscribe(
      appointments => {
        this.appointmentsR = appointments;
      },err =>{
        console.log(err)
        if (!err.error.success){
          this.appointmentsR = {vet_appointments: []}
        }
      });
  }


}
