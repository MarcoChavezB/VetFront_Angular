
import { Component } from '@angular/core';
import { product } from '../../../../Models/Product';
import { ProductService } from '../../../../Services/ProductService/product.service';
import { Router } from '@angular/router';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { ModifyProdComponent } from '../../modify-prod/modify-prod.component';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../../../Services/AuthService/auth-service.service';

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
  existProduct: boolean = true;

  guest: boolean = false;
  admin: boolean = false;
  user: boolean = false;

  constructor(
    private readonly ProdService: ProductService,
    private authService: AuthServiceService,
    private router: Router
    ) {
    
  }

  ngOnInit(): void {
    this.getProductList();
    this.checkRole()

  }

  
  checkRole() {
    const role = this.authService.getRole();
    switch (role) {
      case 0:
        this.guest = true;
        this.user = false;
        this.admin = false;
        break;
      case 1:
        this.guest = false;
        this.user = true;
        this.admin = false;
        break;
      case 2:
        this.guest = false;
        this.user = false;
        this.admin = true;
        break;
      default:
        this.guest = false;
        this.user = false;
        this.admin = false;
        break;
    }
  }

  getProductList() {
    this.ProdService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        if(this.products.length == 0){
          this.existProduct = false;
        }
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

  selProduct(id:number){
    this.router.navigate(['dashboard/ventas', id]);
  }

  closeSuccess(){
    this.alertSucces = false;
  }
}
