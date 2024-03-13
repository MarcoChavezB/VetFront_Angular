import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AppointmentRequestService} from "../../../Services/AppointmentService/appointment-request.service";

@Component({
  selector: 'app-confirm-cancel-appointment',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './confirm-cancel-appointment.component.html',
  styleUrl: './confirm-cancel-appointment.component.css'
})
export class ConfirmCancelAppointmentComponent {

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

  cancelAppointment() {
    if(this.appointmentId) {
      this.appointmentService.markppointmentAsCancelled(this.appointmentId).subscribe(res => {
        this.router.navigate(['/dashboard/appointment-cancelled-index']);
      },err =>{
        if (err.status == 404){
          this.router.navigate(['/404']);
        }
      });
    }
  }

}
