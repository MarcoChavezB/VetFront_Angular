import { Component } from '@angular/core';
import {AppointmentRequestService} from "../../Services/AppointmentService/appointment-request.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AppointmentResults} from "../../Models/Appointment";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";

@Component({
  selector: 'app-appointments-user',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './appointments-user.component.html',
  styleUrl: './appointments-user.component.css'
})
export class AppointmentsUserComponent {

  appointmentsR: AppointmentResults | undefined;

  constructor(
    private appointmentService: AppointmentRequestService,
    private authService: AuthServiceService
  ) {
  }

  ngOnInit() {
    this.appointmentService.getAppointmentsByUser(this.authService.getUserId()).subscribe(
      appointments => {
        this.appointmentsR = appointments;
        console.log(appointments)
        console.log(this.appointmentsR)
      },err =>{
        if (err.status === 404){
          console.log('No appointments found')
          this.appointmentsR = {vet_appointments: []}
        }
      });
  }

}
