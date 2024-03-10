import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {SpecieStoreInterface} from "../../Models/Specie";
import {HttpClient} from "@angular/common/http";
import {PetRegisterInterface} from "../../Models/Pet";

@Injectable({
  providedIn: 'root'
})
export class SpecieServiceService {

  private urlSpecieStore = environment.specieStore

  constructor(
    private readonly http: HttpClient,
  ) { }

  storeSpecie(specie: SpecieStoreInterface){
    return this.http.post<SpecieStoreInterface>(this.urlSpecieStore, specie)
  }
}
