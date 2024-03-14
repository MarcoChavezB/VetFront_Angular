import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppointmentIndexComponent} from "../../Views/appointment-index/appointment-index.component";
import {
  AppointmentCancelledIndexComponent
} from "../../Views/appointment-cancelled-index/appointment-cancelled-index.component";
import {
  AppointmentCompletedIndexComponent
} from "../../Views/appointment-completed-index/appointment-completed-index.component";
import {PrescriptionsIndexComponent} from "../../Views/prescriptions-index/prescriptions-index.component";

const routes: Routes =[
  {
    path: 'appointment-index',
    component: AppointmentIndexComponent
  },
  {
    path: 'appointment-cancelled-index',
    component: AppointmentCancelledIndexComponent
  },
  {
    path: 'completed-appointments',
    component: AppointmentCompletedIndexComponent
  },
  {
    path: 'prescriptions-index',
    component: PrescriptionsIndexComponent
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
export class AppointmentsRoutingModule { }
