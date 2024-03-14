import { Component } from '@angular/core';
import { CardProdComponent } from '../../../../Components/shoping/card-prod/card-prod.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../Services/ProductService/product.service';
import { product, productResult } from '../../../../Models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    CardProdComponent,
    CommonModule
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  items: product[] = [];
  id: number = 0;
  quantity: number = 0;
  price:number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly porductService: ProductService,
    ){
      this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

    });
    this.getProduc();
  }

  getProduc(){
    this.porductService.getProductId(this.id).subscribe(
      (data) => {
        this.saveLocalStorage(data.products);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  saveLocalStorage(product: any) {
    product.cantidad = 1
    let exist = false;
    let price = 0;
  
    this.items.forEach((element: any) => {
      if (element.id == product.id) {
        element.cantidad += 1;
        exist = true;
      }
      price += Number(element.price);
      console.log(element.price)
    });
  
    if (!exist) {
      this.items.push(product);
    }
  
    this.quantity = this.items.length;
    this.price = price;
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
  

  getCart(){
    console.log(this.items)
    return this.items;
  }

  deleteCart(){
    localStorage.removeItem('cart');
    this.items = [];
    this.quantity = 0;
    this.price = 0;
  }

  addItem(id: number){
    console.log("agregando item al producto: " +id)
    this.items.forEach((element: any) => {
      if (element.id == id) {
        element.cantidad += 1;
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.quantity = this.items.length;
  }

  deleteItem(id: number){
    console.log("eliminando item al producto: " +id)
    this.items.forEach((element: any) => {
      if (element.id == id) {
        element.cantidad -= 1;
      }
      if(element.cantidad <= 0){
        this.items = this.items.filter((item: any) => item.id !== id);
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.quantity = this.items.length;
  }
}
