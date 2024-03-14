import { Component } from '@angular/core';
import {SpecieServiceService} from "../../Services/SpecieService/specie-service.service";
import {
  SpecieInterface,
  SpecieResults,
  SpecieStoreInterface,
  SpecieUpdateInterface,
  SpecieUpdateResult
} from "../../Models/Specie";
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule, FormGroup, Validators, FormControl, FormsModule} from "@angular/forms";
import {AlertSuccessComponent} from "../../Components/Alerts/alert-success/alert-success.component";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";
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
  showModalUpdate = false;



  constructor(
    private specieService: SpecieServiceService,
    private petService: PetServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.petService.getSpecies().subscribe(species => {
      this.speciesR = species;
    }, err => {
      if (!err.error.success){
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

  deactivateSpecie(specieId: number){
    this.specieService.deactivateSpecie(specieId).subscribe(species => {
      this.router.navigate(['/dashboard/admin/deactivated-species']);
    }, err => {
      if (!err.error.success){
        this.speciesR = {species: []};
      }
    })
  }

  findByName(name: string){
    this.specieService.getActiveSpeciesByName(name).subscribe(species => {
      this.speciesR = species;
    }, err => {
      if (!err.error.success){
        this.speciesR = {species: []};
      }
    })
  }

  updateSpecieForm = new FormGroup({
    specie_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  specie: SpecieUpdateResult | undefined;
  specie_id: number | undefined;
  openModalUpdate(id: number) {
    this.specieService.showSpecie(id).subscribe(specie => {
      this.specie = specie.specie[0];
      this.specie_id = id;
      this.updateSpecieForm.controls['specie_name'].setValue(this.specie.specie_name);
    },err =>{
      if (!err.error.success) {
        this.router.navigate(['/404']);
      }
    });
    this.showModalUpdate = true;
  }

  closeModalUpdate() {
    this.showModalUpdate = false;
  }

  updateSpecie() {
    this.storeSpecieLoading = true;
    let formValue = this.updateSpecieForm.value;
    let specie: SpecieUpdateInterface = {
      specie_name: formValue.specie_name || '',
    }
    this.specieService.updateSpecie(specie, this.specie_id).subscribe(
      res => {
        this.storeSpecieLoading = false;
        this.showModalUpdate = false;
        this.storeSpecieBackendErrors = null;
        this.ngOnInit();
      },
      err => {
        this.storeSpecieLoading = false;
        switch (err.error.success) {
          case false:
            this.router.navigate(['/404']);
            break;
          default:
            if(err.error.errors){
              this.storeSpecieBackendErrors = err.error.errors;
            }
            break;
        }
      }
    );
  }



}
