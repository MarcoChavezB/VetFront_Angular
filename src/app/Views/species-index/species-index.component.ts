import { Component } from '@angular/core';
import {SpecieServiceService} from "../../Services/SpecieService/specie-service.service";
import {
  SpecieResults,
  SpecieStoreInterface,
  SpecieUpdateInterface,
  SpecieUpdateResult
} from "../../Models/Specie";
import {PetServiceService} from "../../Services/PetService/pet-service.service";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule, FormGroup, Validators, FormControl, FormsModule} from "@angular/forms";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
import {ConfirmationDialogComponent} from "../../Components/Alerts/confirmation-dialog/confirmation-dialog.component";
import {GlobalLoadingComponent} from "../../Components/global-loading/global-loading.component";
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';
@Component({
  selector: 'app-species-index',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    KeyValuePipe,
    ReactiveFormsModule,
    NgClass,
    ConfirmationDialogComponent,
    GlobalLoadingComponent
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
  showConfirmationDialog = false;
  specieToDeactivate: number | null = null;

  role:number | null = 0

  getrole(){
    this.role = this.authservice.getRole()
  }

  constructor(
    private specieService: SpecieServiceService,
    private readonly authservice: AuthServiceService,
    private petService: PetServiceService,
    private router: Router,
    private alertService: GlobalAlertService
  ) {}

  ngOnInit() {
    this.getrole();
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
        this.alertService.showAlert('Especie registrada con éxito');
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
    this.specieToDeactivate = specieId;
    this.showConfirmationDialog = true;
  }

  onConfirm(){
    this.showConfirmationDialog = false;
    this.specieService.deactivateSpecie(this.specieToDeactivate).subscribe(species => {
      this.alertService.showAlert('Especie desactivada con éxito');
      this.router.navigate(['/dashboard/admin/species/deactivated-species']);
    }, err => {
      if (!err.error.success){
        this.speciesR = {species: []};
      }
    })
  }

  onCancel(){
    this.showConfirmationDialog = false;
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
        this.alertService.showAlert('Especie actualizada con éxito');
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
