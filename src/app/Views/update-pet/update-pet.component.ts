import { Component } from '@angular/core';
import {PetUpdateInterface, PetUpdateResult} from "../../Models/Pet";
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SpecieResults} from "../../Models/Specie";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
import {GlobalLoadingComponent} from "../../Components/global-loading/global-loading.component";


@Component({
  selector: 'app-update-pet',
  standalone: true,
  imports: [
    FormsModule,
    KeyValuePipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    RouterLink,
    GlobalLoadingComponent
  ],
  templateUrl: './update-pet.component.html',
  styleUrl: './update-pet.component.css',
  animations: [
    trigger('shake', [
      transition('* => *', [
        animate('1s', keyframes([
          style({ transform: 'translateX(0)' }),
          style({ transform: 'translateX(-5px)' }),
          style({ transform: 'translateX(5px)' }),
          style({ transform: 'translateX(-7px)' }),
          style({ transform: 'translateX(7px)' }),
          style({ transform: 'translateX(-10px)' }),
          style({ transform: 'translateX(0)' }),
        ]))
      ])
    ])
  ]
})
export class UpdatePetComponent {
  petR: PetUpdateResult | undefined;
  pet_id: number | undefined;
  backendErrors: any;
  isLoading = false;
  speciesR: SpecieResults | undefined;


  constructor(
    private petService: PetServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: GlobalAlertService
  ) {
  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pet_id = params['id'];
      this.showPet(params['id']);
      this.fetchSpecies();
    });

  }

  updatePetForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl('', [Validators.required]),
    specie_id: new FormControl('', [Validators.required]),
  });

  showPet(id: number) {
    this.petService.showPet(id).subscribe(pet => {
      this.petR = pet.pet[0];
      this.updatePetForm.controls['name'].setValue(this.petR.name);
      this.updatePetForm.controls['specie_id'].setValue(String(this.petR.specie_id));
      this.updatePetForm.controls['gender'].setValue(this.petR.gender);
    },
      err => {
        if (err.error.success === false){
          this.router.navigate(['/404']);
        }
      });
  }

  fetchSpecies() {
    this.petService.getSpecies().subscribe(species => {
      this.speciesR = species;
    })
  }




  updatePet(){
    this.isLoading = true;
    let formValues = this.updatePetForm.value;
    let pet: PetUpdateInterface = {
      name: formValues.name || '',
      gender: formValues.gender || '',
      specie_id: Number(formValues.specie_id) || 0
    }
    this.petService.updatePet(this.pet_id, pet).subscribe(res => {
        this.alertService.showAlert('Mascota actualizada con éxito');
        this.isLoading = false;
      this.router.navigate(['/dashboard/user/pets']);
    },
      err =>{
      this.isLoading = false;
      switch (err.error.success) {
        case false:
          this.router.navigate(['/404']);
          break;
        default:
          if (err.error.errors){
            this.backendErrors = err.error.errors;
          }
          break;
      }
      });
  }
}
