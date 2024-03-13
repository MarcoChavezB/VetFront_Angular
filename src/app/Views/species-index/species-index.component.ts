import { Component } from '@angular/core';
import {SpecieServiceService} from "../../Services/SpecieService/specie-service.service";
import {SpecieResults, SpecieStoreInterface} from "../../Models/Specie";
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule, FormGroup, Validators, FormControl, FormsModule} from "@angular/forms";
import {AlertSuccessComponent} from "../../Components/Alerts/alert-success/alert-success.component";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-species-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    KeyValuePipe,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './species-index.component.html',
  styleUrl: './species-index.component.css',
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
export class SpeciesIndexComponent {

  speciesR: SpecieResults | undefined;
  storeSpecieBackendErrors: any;
  storeSpecieLoading = false;
  showModal = false;



  constructor(
    private specieService: SpecieServiceService,
    private petService: PetServiceService
  ) {}

  ngOnInit() {
    this.petService.getSpecies().subscribe(species => {
      console.log(species);
      this.speciesR = species;
    }, err => {
      if (err.status === 404){
        this.speciesR = {species: []};
      }
    })
  }

  registerSpecies = new FormGroup({
    specie_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  storeSpecie() {
    this.storeSpecieLoading = true;
    let formValue = this.registerSpecies.value;
    let specie: SpecieStoreInterface = {
      specie_name: formValue.specie_name || '',
    }
    this.specieService.storeSpecie(specie).subscribe(
      res => {
        this.storeSpecieLoading = false;
        this.registerSpecies.reset();
        this.closeModal();
        this.ngOnInit();
      },
      err => {
        this.storeSpecieLoading = false;
        if(err.error.errors){
          this.storeSpecieBackendErrors = err.error.errors;
        }
      }
    );
  }

}
