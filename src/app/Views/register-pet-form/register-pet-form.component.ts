import { Component } from '@angular/core';
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";
import {SpecieResults, SpecieStoreInterface} from "../../Models/Specie";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from "@angular/forms";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {PetRegisterInterface} from "../../Models/Pet";
import {RouterLink} from "@angular/router";
import {SpecieServiceService} from "../../Services/SpecieService/specie-service.service";

@Component({
  selector: 'app-register-pet-form',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './register-pet-form.component.html',
  styleUrl: './register-pet-form.component.css',
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
export class RegisterPetFormComponent {
  speciesR: SpecieResults | undefined;
  showForm: boolean = false;

  registerPetForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl('', [Validators.required]),
    specie: new FormControl('', [Validators.required]),
  });

  registerSpecies = new FormGroup({
    specie_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(
    private petService: PetServiceService,
    private authService: AuthServiceService,
    private specieService: SpecieServiceService
  ) { }



  ngOnInit() {
    this.fetchSpecies();
  }


  onSubmit() {
    let formValue = this.registerPetForm.value;
    let pet: PetRegisterInterface = {
      name: formValue.name || '',
      gender: formValue.gender || '',
      specie_id: Number(formValue.specie),
      user_id: Number(this.authService.getUserId())
    }

    this.petService.storePet(pet).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  showFormSpecies() {
    this.showForm = true;
  }

  closeFormSpecies() {
    this.showForm = false;
  }

  fetchSpecies() {
    this.petService.getSpecies().subscribe(species => {
      console.log(species);
      this.speciesR = species;
    })
  }

  storeSpecie() {
    let formValue = this.registerSpecies.value;
    let specie: SpecieStoreInterface = {
      specie_name: formValue.specie_name || '',
    }
    this.specieService.storeSpecie(specie).subscribe(
      res => {
        this.registerSpecies.reset();
        console.log(res);
        this.fetchSpecies();
        this.showForm = false;
      },
      err => {
        console.log(err);
      }
    );
  }
}
