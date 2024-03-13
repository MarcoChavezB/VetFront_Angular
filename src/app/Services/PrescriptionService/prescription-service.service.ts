import { Injectable } from '@angular/core';
import {PrescriptionStoreInterface, PrescriptionResults} from "../../Models/Prescription";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionServiceService {

  private urlStorePrescription = environment.prescriptionStore
  private urlIndexPrescription = environment.prescriptionsIndex
  private urlUserPrescriptions = environment.userPrescriptionsIndex
  constructor(
    private readonly http: HttpClient,
  ) { }

  storePrescription(prescription: PrescriptionStoreInterface) {
    return this.http.post<PrescriptionStoreInterface>(this.urlStorePrescription, prescription)
  }

  getPrescriptions() {
    return this.http.get<PrescriptionResults>(this.urlIndexPrescription)
  }

  getUserPrescriptions(id: number) {
    return this.http.get<PrescriptionResults>(this.urlUserPrescriptions + id)
  }

}
