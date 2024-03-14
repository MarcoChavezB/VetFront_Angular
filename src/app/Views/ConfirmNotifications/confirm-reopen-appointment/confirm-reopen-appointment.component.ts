import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AppointmentRequestService} from "../../../Services/AppointmentService/appointment-request.service";

@Component({
  selector: 'app-confirm-reopen-appointment',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './confirm-reopen-appointment.component.html',
  styleUrl: './confirm-reopen-appointment.component.css'
})
export class ConfirmReopenAppointmentComponent {
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

  reOpenAppointment() {
    if(this.appointmentId) {
      this.appointmentService.reOpenAppointment(this.appointmentId).subscribe(res => {
        this.router.navigate(['/dashboard/admin/appointments/appointment-index']);
      },
        err =>{
          if (err.status == 404) {
            this.router.navigate(['/404']);
          }
        });
    }
  }

}
