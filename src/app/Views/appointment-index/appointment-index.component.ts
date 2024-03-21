import { Component } from '@angular/core';
import {AppointmentResults} from "../../Models/Appointment";
import {AppointmentRequestService} from "../../Services/AppointmentService/appointment-request.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import { ConfirmationDialogComponent } from '../../Components/Alerts/confirmation-dialog/confirmation-dialog.component';
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';
@Component({
  selector: 'app-appointment-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    ConfirmationDialogComponent,
  ],
  templateUrl: './appointment-index.component.html',
  styleUrl: './appointment-index.component.css'
})
export class AppointmentIndexComponent {

   role:number | null = 0

   getrole(){
     this.role = this.authservice.getRole()
   }
  appointmentsR: AppointmentResults | undefined;
  showConfirmationDialog = false;
  appointmentToDeactivate: number | null = null;
  appointmentToActivate: number | null = null;
  showConfirmationDialogActivate = false;


  constructor(
    private appointmentService: AppointmentRequestService,
    private alertService: GlobalAlertService,
    private router: Router,
    private readonly authservice: AuthServiceService,
  ) {
  }

  ngOnInit() {
    this.getrole()
    this.appointmentService.getAppointments().subscribe(
      appointments => {
        this.appointmentsR = appointments;
      }, err => {
        if (!err.error.success) {
          this.appointmentsR = {vet_appointments: []}
        }
      });
  }

  deactivateAppointment(id: number) {
    this.appointmentToDeactivate = id;
    this.showConfirmationDialog = true;
  }

  activateAppointment(id: number) {
    this.appointmentToActivate = id;
    this.showConfirmationDialogActivate = true;
  }

  onConfirmActivate() {
    this.showConfirmationDialogActivate = false;
    this.appointmentService.markAppointmentAsCompleted(this.appointmentToActivate).subscribe(res => {
      this.alertService.showAlert('Cita completada con exito');
      this.router.navigate(['/dashboard/admin/appointments/completed-appointments']);
    },
      err => {
        if (err.status == 404) {
          this.router.navigate(['/404']);
        }
      });
  }

  onConfirmDeactivate() {
    this.showConfirmationDialog = false;
    this.appointmentService.markppointmentAsCancelled(this.appointmentToDeactivate).subscribe(appointments => {
      this.alertService.showAlert('Cita cancelada con exito');
      this.router.navigate(['/dashboard/admin/appointments/appointment-cancelled-index']);
    }, err => {
      if (err.status == 404) {
      this.router.navigate(['/404']);
    }
    });

  }

  onCancel(){
    this.showConfirmationDialog = false;
  }

  onCancelActivate(){
    this.showConfirmationDialogActivate = false;
  }

  findByName(name: string){
    this.appointmentService.findAppointmentByName(name).subscribe(appointments => {
      this.appointmentsR = appointments;
      console.log(this.appointmentsR)
    },
      err =>{
        if (!err.error.success){
          this.appointmentsR = {vet_appointments: []}
        }
      });
  }
}
