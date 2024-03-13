import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  AppointmentCompletedIndexComponent
} from "../../Views/appointment-completed-index/appointment-completed-index.component";

const routes: Routes =[
  {
    path: 'completed-appointments',
    component: AppointmentCompletedIndexComponent
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
export class AdminRoutingModule { }
