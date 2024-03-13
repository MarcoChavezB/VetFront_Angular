
import { Component } from '@angular/core';
import { product } from '../../../../Models/Product';
import { ProductService } from '../../../../Services/ProductService/product.service';
import { Router } from 'express';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { ModifyProdComponent } from '../../modify-prod/modify-prod.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    AlertConfirmationComponent,
    AlertSuccessComponent,
    ModifyProdComponent,
    CommonModule
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  products: product[] = [];

  nombresPropiedades: string[] = [];
  modifyId: number = 0;
  modificar: boolean = false;
  alertDelete: boolean = false;
  alertSucces: boolean = false;
  deleteId: number = 0;
  objectProd: any = {}

  constructor(
    private readonly ProdService: ProductService,
    ) {
    
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.ProdService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modifyProduct(id: number) {
    this.ProdService.getProductId(id).subscribe(
      (data) => {
        this.objectProd = data.products;
        this.modifyId = id;
        this.modificar = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  closeModify() {
    this.modificar = false;
  }

  showAlertDelete(id: number){
    this.alertDelete = true;
    this.deleteId = id;
  }

  closeAlert(){
    this.alertDelete = false;
  }

  confirmDelete(){
    this.ProdService.deleteProduct(this.deleteId).subscribe(
      (res) => {
        this.alertDelete = false;
        this.alertSucces = true;
        this.getProductList();
      },
      (err) => {
        console.log(err)
      }
    )
  }

  closeSuccess(){
    this.alertSucces = false;
  }
}
