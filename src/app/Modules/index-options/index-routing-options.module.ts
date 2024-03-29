import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  ConfirmReopenAppointmentComponent
} from "../../Views/ConfirmNotifications/confirm-reopen-appointment/confirm-reopen-appointment.component";
import {
  ConfirmCancelAppointmentComponent
} from "../../Views/ConfirmNotifications/confirm-cancel-appointment/confirm-cancel-appointment.component";
import {
  ConfirmCompletedAppointmentComponent
} from "../../Views/ConfirmNotifications/confirm-completed-appointment/confirm-completed-appointment.component";
import {PrescriptionsComponent} from "../../Views/prescriptions/prescriptions.component";
import {UpdatePetComponent} from "../../Views/update-pet/update-pet.component";
import { AdminGuard } from '../../Guards/Admin/admin.guard';
const routes: Routes = [
  {
    path: 'prescription/store/:id',
    component: PrescriptionsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'pet/update/:id',
    component: UpdatePetComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class IndexRoutingOptionsModule { }
