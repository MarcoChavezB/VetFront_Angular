import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AppointmentResults, AppointmentStoreInterface} from "../../Models/Appointment";
import {Observable} from "rxjs";
import { totalInterface } from '../../Models/Total';
import { AppointmentUser, AppointmentUserResults } from '../../Models/AppontmentUser';


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
  private urlFindAppointmentByName = environment.findAppointmentByName
  private urlFindCancelledAppointmentByName = environment.findCancelledAppointmentByName
  private urlFindCompletedAppointmentByName = environment.findCompletedAppointmentByName
  private urlFindUserAppointmentsByDate = environment.findUserAppointmentsByDate

  constructor(
    private readonly http: HttpClient,

  ) { }

  storeAppointment(appointment: AppointmentStoreInterface): Observable<AppointmentStoreInterface> {
    return this.http.post<AppointmentStoreInterface>(this.urlStoreAppointment, appointment)
  }

  getAppointments(): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlGetAppointments)
  }

  markAppointmentAsCompleted(id: number | null): Observable<any> {
    return this.http.put<any>(this.urlMarkAppointmentAsCompleted+ id, {})
  }

  getCancelledAppointments(): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlGetCancelledAppointments)
  }

  reOpenAppointment(id: number | null): Observable<any> {
    return this.http.put<any>(this.urlReOpenAppointment + id, {})
  }

  markppointmentAsCancelled(id: number | null): Observable<any>{
    return this.http.put<any>(this.urlMarkAppointmentAsCancelled + id, {})
  }

  getAppointmentsByUser(id: number): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.getVetAppointmentsByUser + id)
  }

  getCompletedAppointments(): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlGetCompletedAppointments)
  }
  getTotalAppointments(): Observable<totalInterface> {
    return this.http.get<totalInterface>(environment.totalAppointments)
  }
  getAppointmentsWithUser(): Observable<AppointmentUserResults>{
    return this.http.get<AppointmentUserResults>(environment.AppointmentUser)
  }

  findAppointmentByName(name: string): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlFindAppointmentByName + name)
  }

  findCancelledAppointmentByName(name: string): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlFindCancelledAppointmentByName + name)
  }

  findCompletedAppointmentByName(name: string): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlFindCompletedAppointmentByName + name)
  }

  findUserAppointmentsByDate(date: string, id: number): Observable<AppointmentResults> {
    return this.http.get<AppointmentResults>(this.urlFindUserAppointmentsByDate + date + '/' + id)
  }
}
