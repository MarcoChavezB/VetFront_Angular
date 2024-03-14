import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SpeciesIndexComponent} from "../../Views/species-index/species-index.component";
import {
  SpeciesDeactivatedIndexComponent
} from "../../Views/species-deactivated-index/species-deactivated-index.component";

const routes: Routes =[
  {
    path: 'species-index',
    component: SpeciesIndexComponent
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
export class SpecieRoutingModule { }
