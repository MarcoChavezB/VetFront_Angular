import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

import { Observable } from "rxjs";
import { servicesAll, service, newservice, status } from '../../Models/services';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  index = environment.serviceindex
  store = environment.servicestore
  modify = environment.servicemodify
  show = environment.serviceshow  
  delete = environment.servicedelete

  constructor(    private readonly http: HttpClient
    ) { 

  }

  getServices():Observable<servicesAll>{
    return this.http.get<servicesAll>(this.index)
  }

  storeService(nw:newservice):Observable<service>{
      return this.http.post<service>(this.store, nw)
  }

  modifyService(nw:service):Observable<service>{
    return this.http.put<service>(this.modify, nw)
  }

  getServiceId(id: number):Observable<service>{
    return this.http.get<service>(this.show + id)
  }

  deleteService(id: number):Observable<status>{
    return this.http.delete<status>(this.delete + id)
  }
}
