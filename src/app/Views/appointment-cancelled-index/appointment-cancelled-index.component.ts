import { Component } from '@angular/core';
import {AppointmentResults} from "../../Models/Appointment";
import {AppointmentRequestService} from "../../Services/AppointmentService/appointment-request.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {ConfirmationDialogComponent} from "../../Components/Alerts/confirmation-dialog/confirmation-dialog.component";
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
@Component({
  selector: 'app-appointment-cancelled-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    ConfirmationDialogComponent
  ],
  templateUrl: './appointment-cancelled-index.component.html',
  styleUrl: './appointment-cancelled-index.component.css'
})
export class AppointmentCancelledIndexComponent {

  appointmentsR: AppointmentResults | undefined;
  showConfirmationDialog = false;
  appointmentToActivate: number | null = null;

  constructor(
    private appointmentService: AppointmentRequestService,
    private router: Router,
    private alertService: GlobalAlertService
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

  activateAppointment(id: number) {
    this.appointmentToActivate = id;
    this.showConfirmationDialog = true;
  }

  onConfirm() {
    this.showConfirmationDialog = false;
    this.appointmentService.reOpenAppointment(this.appointmentToActivate).subscribe(res => {
      this.alertService.showAlert('Cita re abierta con exito');
      this.router.navigate(['/dashboard/admin/appointments/appointment-index']);
    }, err => {
      console.log(err)
    });
  }

  onCancel() {
    this.showConfirmationDialog = false;
  }


}
