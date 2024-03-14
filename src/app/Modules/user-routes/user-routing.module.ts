import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PrescriptionsUserComponent} from "../../Views/prescriptions-user/prescriptions-user.component";
import {AppointmentsUserComponent} from "../../Views/appointments-user/appointments-user.component";
import {UserPetsComponent} from "../../Views/user-pets/user-pets.component";

const routes: Routes =[
  {
    path: 'prescriptions',
    component: PrescriptionsUserComponent
  },
  {
    path: 'appointments',
    component: AppointmentsUserComponent
  },
  {
    path: 'pets',
    component: UserPetsComponent

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
export class UserRoutingModule { }
