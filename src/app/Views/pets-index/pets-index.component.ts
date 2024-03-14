import { Component } from '@angular/core';
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pets-index',
  standalone: true,
  templateUrl: './pets-index.component.html',
  styleUrl: './pets-index.component.css',
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule
  ],
})
export class PetsIndexComponent {
  petsR: any;
  constructor(
    private petService: PetServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.petService.getActivatedPets().subscribe(pets => {
      this.petsR = pets;
    },
      err =>{
        if (!err.error.success){
          this.petsR = {pets: []}
        }
      });
  }

  findByName(name: string){
    this.petService.getActivePets(name).subscribe(pets => {
      this.petsR = pets;
    },
      err =>{
        if (!err.error.success){
          this.petsR = {pets: []}
        }
      });
  }

  deactivatePet(petId: number){
    this.petService.deactivatePet(petId).subscribe(pets => {
      this.router.navigate(['/dashboard/admin/deactivated-pets']);
    },
      err =>{
        if (!err.error.success){
          this.petsR = {pets: []}
        }
      });
  }

}
