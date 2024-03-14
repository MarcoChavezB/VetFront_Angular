import { Component } from '@angular/core';
import {SpecieResults} from "../../Models/Specie";
import {SpecieServiceService} from "../../Services/SpecieService/specie-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-species-deactivated-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './species-deactivated-index.component.html',
  styleUrl: './species-deactivated-index.component.css'
})
export class SpeciesDeactivatedIndexComponent {
  speciesR: SpecieResults | undefined;

  constructor(
    private specieService: SpecieServiceService,
    private router: Router
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
    this.specieService.activateSpecie(specieId).subscribe(species => {
      this.router.navigate(['/dashboard/species-index']);
    }, err => {
      if (!err.error.success){
        this.speciesR = {species: []};
      }
    })
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
