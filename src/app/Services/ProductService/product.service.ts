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
  store = environment.productStore
  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts():Observable<productResult>{
    return this.http.get<productResult>(this.index)
  }

  storeProduct(name: string, price: string, stock: number, description:string, category_id:number):Observable<productResult>{
      return this.http.post<productResult>(this.store, {name, price, stock, description, category_id})
  }
}
