import { Component } from '@angular/core';
import { RowProductComponent } from '../../../Components/Table/row-product/row-product.component';
import { ProductService } from '../../../Services/ProductService/product.service';
import { product, productResult } from '../../../Models/Product';
import { CommonModule } from '@angular/common';
import { HeadProductComponent } from '../../../Components/Table/head-product/head-product.component';
import { Router } from '@angular/router';
import { ModifyProdComponent } from '../modify-prod/modify-prod.component';
import { AlertConfirmationComponent } from '../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../Components/Alerts/alert-success/alert-success.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RowProductComponent,
    CommonModule,
    HeadProductComponent,
    ModifyProdComponent,
    AlertConfirmationComponent,
    AlertSuccessComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
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
    private readonly router: Router
    ) {
    
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.ProdService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        console.log(this.products);
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
