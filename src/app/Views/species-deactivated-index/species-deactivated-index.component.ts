import { Component } from '@angular/core';
import {SpecieResults} from "../../Models/Specie";
import {SpecieServiceService} from "../../Services/SpecieService/specie-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
import {ConfirmationDialogComponent} from "../../Components/Alerts/confirmation-dialog/confirmation-dialog.component";
@Component({
  selector: 'app-species-deactivated-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ConfirmationDialogComponent
  ],
  templateUrl: './species-deactivated-index.component.html',
  styleUrl: './species-deactivated-index.component.css'
})
export class SpeciesDeactivatedIndexComponent {
  speciesR: SpecieResults | undefined;
  showConfirmationDialog = false;
  specieToActivate: number | null = null;

  constructor(
    private specieService: SpecieServiceService,
    private router: Router,
    private alertService: GlobalAlertService
  ) {}

  ngOnInit() {
    this.specieService.getDeactivatedSpecies().subscribe(species => {
      this.speciesR = species;
    }, err => {
      if (!err.error.success){
        this.speciesR = {species: []};
      }
    })
  }

  activateSpecie(specieId: number){
    this.specieToActivate = specieId;
    this.showConfirmationDialog = true;
  }

  onConfirm(){
    this.showConfirmationDialog = false;
    this.specieService.activateSpecie(this.specieToActivate).subscribe(species => {
      this.alertService.showAlert('Especie activada con éxito');
      this.router.navigate(['/dashboard/admin/species/species-index']);
    }, err => {
      if (!err.error.success){
        this.speciesR = {species: []};
      }
    })
  }

  onCancel(){
    this.showConfirmationDialog = false;
  }

  findByName(name: string){
    this.specieService.getDeactivatedSpeciesByName(name).subscribe(species => {
      this.speciesR = species;
    }, err => {
      if (!err.error.success){
        this.speciesR = {species: []};
      }
    })
  }
}
