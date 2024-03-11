import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AppointmentResults, AppointmentStoreInterface} from "../../Models/Appointment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppointmentRequestService {

  private urlStoreAppointment = environment.storeAppointment
  private urlGetAppointments = environment.indexAppointments

  constructor(
    private readonly http: HttpClient,

  ) { }

  storeAppointment(appointment: AppointmentStoreInterface): Observable<AppointmentStoreInterface> {
    return this.http.post<AppointmentStoreInterface>(this.urlStoreAppointment, appointment)
  }

  getAppointments(): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlGetAppointments)
  }
}
