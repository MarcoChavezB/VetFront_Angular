import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {SpecieInterface, SpecieResult, SpecieStoreInterface, SpecieUpdateResult} from "../../Models/Specie";
import {HttpClient} from "@angular/common/http";
import {SpecieResults} from "../../Models/Specie";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SpecieServiceService {

  private urlSpecieStore = environment.specieStore
  private urlSpecieDeactivatedIndex = environment.specieDeactivatedIndex
  private urlActivateSpecie = environment.activateSpecie
  private urlDeactivateSpecie = environment.deactivateSpecie
  private urlActiveSpecies = environment.activeSpecies
  private urlDeactivatedSpecies = environment.deactivatedSpecies
  private urlUpdateSpecie = environment.updateSpecie
  private urlShowSpecie = environment.showSpecie


  constructor(
    private readonly http: HttpClient,
  ) { }

  storeSpecie(specie: SpecieStoreInterface){
    return this.http.post<SpecieStoreInterface>(this.urlSpecieStore, specie)
  }

  getDeactivatedSpecies(){
    return this.http.get<SpecieResults>(this.urlSpecieDeactivatedIndex)
  }

  activateSpecie(id: number | null){
    return this.http.put<any>(this.urlActivateSpecie + id, {})
  }

  deactivateSpecie(id: number | null){
    return this.http.delete<any>(this.urlDeactivateSpecie + id)
  }

  getActiveSpeciesByName(name: string){
    return this.http.get<SpecieResults>(this.urlActiveSpecies + name)
  }

  getDeactivatedSpeciesByName(name: string){
    return this.http.get<SpecieResults>(this.urlDeactivatedSpecies + name)
  }

  updateSpecie(specie: SpecieStoreInterface, id: number | undefined){
    return this.http.put<SpecieStoreInterface>(this.urlUpdateSpecie + id, specie)
  }

  showSpecie(id: number ):Observable<SpecieResult>{
    return this.http.get<SpecieResult>(this.urlShowSpecie + id)
  }
}
