import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AppointmentRequestService} from "../../../Services/AppointmentService/appointment-request.service";
import {GlobalAlertService} from "../../../Services/GlobalAlert/global-alert.service";

@Component({
  selector: 'app-confirm-completed-appointment',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './confirm-completed-appointment.component.html',
  styleUrl: './confirm-completed-appointment.component.css'
})
export class ConfirmCompletedAppointmentComponent {
  constructor(
    private appointmentService: AppointmentRequestService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: GlobalAlertService
  ) {
  }

  appointmentId: number | undefined;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appointmentId = params['id'];
    });
  }

  confirmAppointment() {
    if (this.appointmentId) {
      this.appointmentService.markAppointmentAsCompleted(this.appointmentId).subscribe(res => {
          this.alertService.showAlert('Cita completada con exito');
          this.router.navigate(['/dashboard/admin/appointments/appointment-index']);
      },
        err => {
          if (err.status == 404) {
            this.router.navigate(['/404']);
          }
        });
    }
  }

}
