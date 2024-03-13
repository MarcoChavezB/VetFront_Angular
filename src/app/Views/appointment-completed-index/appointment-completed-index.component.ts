import { Component } from '@angular/core';
import {AppointmentRequestService} from "../../Services/AppointmentService/appointment-request.service";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";
import {AppointmentResults} from "../../Models/Appointment";
import {NgForOf, NgIf} from "@angular/common";



@Component({
  selector: 'app-appointment-completed-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './appointment-completed-index.component.html',
  styleUrl: './appointment-completed-index.component.css'
})
export class AppointmentCompletedIndexComponent {

  appointmentsR: AppointmentResults | undefined;
  constructor(
    private appointmentService: AppointmentRequestService,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.appointmentService.getCompletedAppointments().subscribe(
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