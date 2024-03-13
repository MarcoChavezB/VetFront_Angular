import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AppointmentRequestService} from "../../../Services/AppointmentService/appointment-request.service";

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
    private route: ActivatedRoute
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
        this.router.navigate(['/dashboard/admin/completed-appointments']);
      },
        err => {
          if (err.status == 404) {
            this.router.navigate(['/404']);
          }
        });
    }
  }

}
