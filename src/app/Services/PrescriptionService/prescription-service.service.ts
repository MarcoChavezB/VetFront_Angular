import { Injectable } from '@angular/core';
import {PrescriptionStoreInterface} from "../../Models/Prescription";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionServiceService {

  private urlStorePrescription = environment.prescriptionStore
  constructor(
    private readonly http: HttpClient,
  ) { }

  storePrescription(prescription: PrescriptionStoreInterface) {
    return this.http.post<PrescriptionStoreInterface>(this.urlStorePrescription, prescription)
  }
}
