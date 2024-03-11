import {HttpClient} from "@angular/common/http";

import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { productResult } from "../../Models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  index = environment.productIndex
  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts():Observable<productResult>{
    return this.http.get<productResult>(this.index)
  }
}
