import { Component } from '@angular/core';
import {AppointmentResults} from "../../Models/Appointment";
import {AppointmentRequestService} from "../../Services/AppointmentService/appointment-request.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-appointment-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './appointment-index.component.html',
  styleUrl: './appointment-index.component.css'
})
export class AppointmentIndexComponent {

  appointmentsR: AppointmentResults | undefined;

  constructor(
    private appointmentService: AppointmentRequestService
  ) {
  }

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(
      appointments => {
      this.appointmentsR = appointments;
    },err =>{
        if (!err.error.success){
          this.appointmentsR = {vet_appointments: []}
        }
      });
  }

}
