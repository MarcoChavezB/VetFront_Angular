import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConfirmCompletedAppointmentComponent
} from "../../Views/ConfirmNotifications/confirm-completed-appointment/confirm-completed-appointment.component";
import {
  ConfirmReopenAppointmentComponent
} from "../../Views/ConfirmNotifications/confirm-reopen-appointment/confirm-reopen-appointment.component";
import {
  ConfirmCancelAppointmentComponent
} from "../../Views/ConfirmNotifications/confirm-cancel-appointment/confirm-cancel-appointment.component";
import {IndexRoutingOptionsModule} from "./index-routing-options.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexRoutingOptionsModule,
    ConfirmCompletedAppointmentComponent,
    ConfirmReopenAppointmentComponent,
    ConfirmCancelAppointmentComponent
  ]
})
export class IndexOptionsModule { }
