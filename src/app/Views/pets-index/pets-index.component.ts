import { Component } from '@angular/core';
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import { FormsModule } from '@angular/forms';
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
import {ConfirmationDialogComponent} from "../../Components/Alerts/confirmation-dialog/confirmation-dialog.component";
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';
@Component({
  selector: 'app-pets-index',
  standalone: true,
  templateUrl: './pets-index.component.html',
  styleUrl: './pets-index.component.css',
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule,
    ConfirmationDialogComponent
  ],
})
export class PetsIndexComponent {

  role:number | null = 0

  getrole(){
    this.role = this.authservice.getRole()
  }


  petsR: any;
  showConfirmationDialog = false;
  petToDeactivate: number | null = null;
  constructor(
    private petService: PetServiceService,
    private router: Router,
    private alertService: GlobalAlertService,
    private readonly authservice: AuthServiceService,
  ) {}

  ngOnInit() {
    this.getrole()
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
    this.petToDeactivate = petId;
    this.showConfirmationDialog = true;
  }

  onConfirm(){
    this.showConfirmationDialog = false;
    this.petService.deactivatePet(this.petToDeactivate).subscribe(pets => {
      this.alertService.showAlert('Mascota desactivada con éxito');
      this.router.navigate(['/dashboard/admin/pets/deactivated-pets']);
    }, err => {
      if (!err.error.success){
        this.petsR = {pets: []};
      }
    })
  }

  onCancel(){
    this.showConfirmationDialog = false;
  }

}
