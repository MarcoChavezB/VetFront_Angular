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
  role:number | null = 0
  constructor(
    private appointmentService: AppointmentRequestService,
    private authService: AuthServiceService
  ) {}

  getrole(){
    this.role = this.authService.getRole()
  }

  ngOnInit() {
    this.getrole();
    this.appointmentService.getCompletedAppointments().subscribe(
      appointments => {
        this.appointmentsR = appointments;
      },err =>{
        if (!err.error.success){
          this.appointmentsR = {vet_appointments: []}
        }
      });
  }

  findByName(name: string){
    this.appointmentService.findCompletedAppointmentByName(name).subscribe(appointments => {
      this.appointmentsR = appointments;
    },
      err => {
        if (!err.error.success){
          this.appointmentsR = {vet_appointments: []};
        }
      });
  }

}
