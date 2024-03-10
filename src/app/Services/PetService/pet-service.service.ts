import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpecieInterface, SpecieResults} from "../../Models/Specie";
import {PetRegisterInterface} from "../../Models/Pet";
@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private urlSpeciesIndex = environment.speciesIndex
  private urlPetStore = environment.petStore

  constructor(
    private readonly http: HttpClient,
  ) { }

  getSpecies(): Observable<SpecieResults> {
    return this.http.get<SpecieResults>(this.urlSpeciesIndex)
  }

  storePet(pet: PetRegisterInterface): Observable<any> {
    return this.http.post<PetRegisterInterface>(this.urlPetStore, pet)
  }
}
