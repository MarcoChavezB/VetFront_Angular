import { Component } from '@angular/core';
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, Router} from "@angular/router";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pets-deactivate-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './pets-deactivate-index.component.html',
  styleUrl: './pets-deactivate-index.component.css'
})
export class PetsDeactivateIndexComponent {
  petsR: any;
  constructor(
    private petService: PetServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.petService.getDeactivatedPets().subscribe(pets => {
      this.petsR = pets;
    },
      err =>{
        if (!err.error.success){
          this.petsR = {pets: []}
        }
      });
  }
  findByName(name: string){
    this.petService.getDeactivatedPetsByName(name).subscribe(pets => {
      this.petsR = pets;
    },
      err =>{
        if (!err.error.success){
          this.petsR = {pets: []}
        }
      });
  }
  activatePet(petId: number){
    this.petService.activatePet(petId).subscribe(pets => {
        this.router.navigate(['/dashboard/admin/pets']);
    },
      err =>{
        if (!err.error.success){
          this.petsR = {pets: []}
        }
      });
  }

}
