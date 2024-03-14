import { Component } from '@angular/core';
import { CardProdComponent } from '../../../../Components/shoping/card-prod/card-prod.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../Services/ProductService/product.service';
import { product, productResult } from '../../../../Models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaleFormat } from '../../../../Models/SaleFormat';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { AlertErrorComponent } from '../../../../Components/Alerts/alert-error/alert-error.component';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    CardProdComponent,
    FormsModule,
    CommonModule,
    AlertConfirmationComponent,
    AlertSuccessComponent,
    AlertErrorComponent
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  totalCost: number = 0;
  items: product[] = [];
  id: number = 0;
  quantity: number = 0;
  price:number = 0;
  customerPhone: string = '';
  customerName: string = '';
  customerLastName: string = '';
  customerData: {} = {
    name: "",
    lastName:"",
    phone: ""
  };
  message: string = '';
  showConfirmation: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;
  messageError: string = ''

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
      price += Number(element.totalPrice);
    });
  
    if (!exist) {
      this.items.push(product);
    }
  
    this.quantity = this.items.length;
    this.price = price;
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getCart(){
    console.log(this.formatBeforeSend())
    return this.items;
  }

  formatBeforeSend(): SaleFormat {
    const formattedDate: SaleFormat = {
      customerName: this.customerName,
      customerLastName: this.customerLastName,
      customerPhone: this.customerPhone,
      products: this.items.map(item => ({
        id: item.id !== undefined ? item.id.toString() : '',
        cantidad: item.cantidad !== undefined ? item.cantidad.toString() : '', 
        total: item.totalPrice !== undefined ? item.totalPrice.toString() : ''
      }
      ))
    }
    return formattedDate;
  }

  deleteCart(){
    localStorage.removeItem('cart');
    this.totalCost = 0;
    this.items = [];
    this.quantity = 0;
    this.price = 0;
  }

  addItem(id: number) {    
    this.items.forEach((element: any) => {
      if (element.id === id) {
        element.cantidad += 1;
        element.price = Number(element.price); 
        element.totalPrice = element.price * element.cantidad; 
      }
    });
    
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.quantity = this.items.length;
  }
  


  deleteItem(id: number){
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

  getTotal(){
    console.log(this.formatBeforeSend())
    this.porductService.getTotal(this.formatBeforeSend()).subscribe(
      (data) => {
        this.totalCost = data;
        this.message = "El total de la compra es: $" + this.totalCost + " quiere confirmar la compra?";
        this.showConfirmation = true;
        console.log(data)
      },
      (error) => {
        console.log(error);
      }
    )
  }

  // getTotalProduct(){
  //   this.porductService.getTotal(this.formatBeforeSend()).subscribe(
  //     (data) => {
  //       this.totalCost = data;
  //     }
  //   )
  // }

  closeConfirmation(){
    this.showConfirmation = false;
  }

  confirmSale(){
    this.porductService.makeSale(this.formatBeforeSend()).subscribe(
      (data) => {
        this.showConfirmation = false;
        this.deleteCart();
        this.showAlert("Venta realizada con exito!")
      },
      (err) => {
        if (err && err.error && err.error.error) {
          const firstError = this.getFirstError(err.error.error);
          this.showAlertError(firstError);

        } else {
          this.showAlertError(err.error.message)
          console.log("error2: " + err.error.message)
        }
      }
    )
  }

  getFirstError(errors: Record<string, string[]>): string {
    const firstErrorKey = Object.keys(errors)[0];
    return errors[firstErrorKey][0];
  }

  showAlert(message:string){
    this.message = message;
    this.showConfirmation = false;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }
    , 2000);
  }

  showAlertError(message:string){
    this.showConfirmation = false;
    this.messageError = message;
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }
    , 2000);
  }
}
