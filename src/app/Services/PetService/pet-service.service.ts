import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpecieInterface, SpecieResults} from "../../Models/Specie";
import {
  PetIndexResults,
  PetInterface,
  PetRegisterInterface,
  PetResult,
  PetResults,
  PetUpdateInterface
} from "../../Models/Pet";
@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private urlSpeciesIndex = environment.speciesIndex
  private urlPetStore = environment.petStore
  private urlUserPets = environment.userPets
  private urlShowPet = environment.showPet
  private urlUpdatePet = environment.updatePet
  private urlPetIndex = environment.petIndex
  private urlDeactivatedPetIndex = environment.deactivatedPetIndex
  private urlActivePets = environment.activePets
  private urlDeactivatedPets = environment.deactivatedPets
  private urlActivatePet = environment.activatePet
  private urlDeactivatePet = environment.deactivatePet

  constructor(
    private readonly http: HttpClient,
  ) { }

  getSpecies(): Observable<SpecieResults> {
    return this.http.get<SpecieResults>(this.urlSpeciesIndex)
  }

  storePet(pet: PetRegisterInterface): Observable<any> {
    return this.http.post<PetRegisterInterface>(this.urlPetStore, pet)
  }

  getUserPets(id: number): Observable<PetResults> {
    return this.http.get<PetResults>(this.urlUserPets + id)
  }

  showPet(id: number): Observable<PetResult> {
    return this.http.get<PetResult>(this.urlShowPet + id)
  }

  updatePet(id: number | undefined, pet: PetUpdateInterface): Observable<any> {
    return this.http.put<any>(this.urlUpdatePet + id, pet)
  }

  getActivatedPets(): Observable<PetIndexResults> {
    return this.http.get<PetIndexResults>(this.urlPetIndex)
  }

  getDeactivatedPets(): Observable<PetIndexResults> {
    return this.http.get<PetIndexResults>(this.urlDeactivatedPetIndex)
  }

  getActivePets(name: string): Observable<PetIndexResults> {
    return this.http.get<PetIndexResults>(this.urlActivePets + name)
  }

  getDeactivatedPetsByName(name: string): Observable<PetIndexResults> {
    return this.http.get<PetIndexResults>(this.urlDeactivatedPets + name)
  }

  activatePet(id: number): Observable<any> {
    return this.http.put<any>(this.urlActivatePet + id, {})
  }

  deactivatePet(id: number): Observable<any> {
    return this.http.delete<any>(this.urlDeactivatePet + id)
  }
}
