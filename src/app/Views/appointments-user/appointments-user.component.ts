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
        console.log(this.appointmentsR)
      },err =>{
        if (!err.error.success){
          this.appointmentsR = {vet_appointments: []}
        }
      });
  }

  findByDate(date: string){
    console.log(date)
    if (date === ''){
      this.ngOnInit();
    }else {
    this.appointmentService.findUserAppointmentsByDate(date,this.authService.getUserId()).subscribe(appointments => {
      this.appointmentsR = appointments;
    },
      err => {
        if (!err.error.success){
          this.appointmentsR = {vet_appointments: []};
        }
      });
    }
  }

}
