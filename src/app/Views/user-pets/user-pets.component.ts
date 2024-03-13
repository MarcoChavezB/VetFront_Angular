import { Component } from '@angular/core';
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-pets',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './user-pets.component.html',
  styleUrl: './user-pets.component.css'
})
export class UserPetsComponent {

  petsR: any;
  constructor(
    private petService: PetServiceService,
    private authService: AuthServiceService,
  ) {}
  ngOnInit() {
    this.petService.getUserPets(this.authService.getUserId()).subscribe(pets => {
      this.petsR = pets;
      console.log(this.petsR);
    },
      err =>{
      });
  }
}
