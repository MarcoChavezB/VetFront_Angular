import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Observable, ObservableNotification } from "rxjs";
import { productResult } from "../../Models/Product";
import { totalInterface } from "../../Models/Total";
import { SaleFormat } from "../../Models/SaleFormat";
import { Venta } from "../../Models/Venta";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  index = environment.productIndex
  store = environment.productStore
  modify = environment.productModify
  show = environment.showProductId  
  delete = environment.deleteProduct

  
  constructor(
    private readonly http: HttpClient
  ) { }

  getProducts():Observable<productResult>{
    return this.http.get<productResult>(this.index)
  }

  getProductsDisabled(): Observable<productResult> {
    return this.http.get<productResult>(environment.productsDisabled)
  }

  storeProduct(name: string, price: string, stock: number, description:string, category_id:number):Observable<productResult>{
      return this.http.post<productResult>(this.store, {name, price, stock, description, category_id})
  }

  modifyProduct(id:number, name: string, price: string, stock: number, description:string, category_id:number):Observable<productResult>{
    return this.http.put<productResult>(this.modify + id, {name, price, stock, description, category_id})
  }

  getProductId(id: number):Observable<productResult>{
    return this.http.get<productResult>(this.show + id)
  }

  deleteProduct(id: number):Observable<productResult>{
    return this.http.delete<productResult>(this.delete + id)
  }

  getTotalProducts(): Observable<totalInterface> {
    return this.http.get<totalInterface>(environment.totalProductos)
  }

  getProductsStockBajo(): Observable<productResult> {
    return this.http.get<productResult>(environment.productsStockBajo)
  }

  enableProd(id:number): Observable<productResult>{
    return this.http.post<productResult>(environment.enableProd + id, {})
  }

  getTotal(requestData: any): Observable<any> {
    return this.http.post<any>(environment.getTotal, requestData);
  }

  makeSale(requestData: SaleFormat): Observable<SaleFormat> {
    return this.http.post<SaleFormat>(environment.makeSale, requestData);
  }

  getProduct(name: string): Observable<productResult> {
    return this.http.get<productResult>(environment.getProductSearch + name);
  }

  getVentas(): Observable<Venta[]>{
    return this.http.get<Venta[]>(environment.salesIndex)
  }
  
}
