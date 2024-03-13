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
  private urlMarkAppointmentAsCompleted = environment.markAppointmentAsCompleted
  private urlGetCancelledAppointments = environment.cancelledAppointments
  private urlReOpenAppointment = environment.reOpenAppointment
  private urlMarkAppointmentAsCancelled = environment.markAppointmentAsCancelled
  private getVetAppointmentsByUser = environment.getVetAppointmentsByUser
  private urlGetCompletedAppointments = environment.completedAppointments

  constructor(
    private readonly http: HttpClient,

  ) { }

  storeAppointment(appointment: AppointmentStoreInterface): Observable<AppointmentStoreInterface> {
    return this.http.post<AppointmentStoreInterface>(this.urlStoreAppointment, appointment)
  }

  getAppointments(): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlGetAppointments)
  }

  markAppointmentAsCompleted(id: number): Observable<any> {
    return this.http.put<any>(this.urlMarkAppointmentAsCompleted+ id, {})
  }

  getCancelledAppointments(): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlGetCancelledAppointments)
  }

  reOpenAppointment(id: number): Observable<any> {
    return this.http.put<any>(this.urlReOpenAppointment + id, {})
  }

  markppointmentAsCancelled(id: number): Observable<any>{
    return this.http.put<any>(this.urlMarkAppointmentAsCancelled + id, {})
  }

  getAppointmentsByUser(id: number): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.getVetAppointmentsByUser + id)
  }

  getCompletedAppointments(): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlGetCompletedAppointments)
  }
}
