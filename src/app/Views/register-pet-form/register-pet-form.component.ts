import { Component } from '@angular/core';
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {AuthServiceService} from "../../Services/AuthService/auth-service.service";
import {SpecieResults} from "../../Models/Specie";
import {NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from "@angular/forms";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {PetRegisterInterface} from "../../Models/Pet";

@Component({
  selector: 'app-register-pet-form',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
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

  registerPetForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl('', [Validators.required]),
    specie: new FormControl('', [Validators.required]),
  });

  constructor(
    private petService: PetServiceService,
    private authService: AuthServiceService
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


  fetchSpecies() {
    this.petService.getSpecies().subscribe(species => {
      console.log(species);
      this.speciesR = species;
    })
  }
}
