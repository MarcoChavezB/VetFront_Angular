import { Component } from '@angular/core';
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, Router} from "@angular/router";
import { FormsModule } from '@angular/forms';
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
import {ConfirmationDialogComponent} from "../../Components/Alerts/confirmation-dialog/confirmation-dialog.component";
@Component({
  selector: 'app-pets-deactivate-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule,
    ConfirmationDialogComponent
  ],
  templateUrl: './pets-deactivate-index.component.html',
  styleUrl: './pets-deactivate-index.component.css'
})
export class PetsDeactivateIndexComponent {
  petsR: any;
  showConfirmationDialog = false;
  petToActivate: number | null = null;
  constructor(
    private petService: PetServiceService,
    private router: Router,
    private alertService: GlobalAlertService
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
    this.petToActivate = petId;
    this.showConfirmationDialog = true;
  }

  onConfirm(){
    this.showConfirmationDialog = false;
    this.petService.activatePet(this.petToActivate).subscribe(pets => {
      this.alertService.showAlert('Mascota activada con éxito');
      this.router.navigate(['/dashboard/admin/pets/pets-index']);
    }, err => {
      if (!err.error.success){
        this.petsR = {pets: []}
      }
    })
  }

  onCancel(){
    this.showConfirmationDialog = false;
  }

}
