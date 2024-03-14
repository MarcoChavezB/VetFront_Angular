import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  AppointmentCompletedIndexComponent
} from "../../Views/appointment-completed-index/appointment-completed-index.component";
import {PetsIndexComponent} from "../../Views/pets-index/pets-index.component";
import {PetsDeactivateIndexComponent} from "../../Views/pets-deactivate-index/pets-deactivate-index.component";
import {
  SpeciesDeactivatedIndexComponent
} from "../../Views/species-deactivated-index/species-deactivated-index.component";

const routes: Routes =[
  {
    path: 'completed-appointments',
    component: AppointmentCompletedIndexComponent
  },
  {
    path: 'pets',
    component: PetsIndexComponent
  },
  {
    path: 'deactivated-pets',
    component: PetsDeactivateIndexComponent
  },
  {
    path: 'deactivated-species',
    component: SpeciesDeactivatedIndexComponent
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
