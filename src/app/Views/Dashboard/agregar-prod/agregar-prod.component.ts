import { Component, NgModule } from '@angular/core';
import { CategoryServiceService } from '../../../Services/CategoryService/category-service.service';
import { Category } from '../../../Models/Category';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../Services/ProductService/product.service';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { AlertErrorComponent } from '../../../Components/Alerts/alert-error/alert-error.component';
import { AlertSuccessComponent } from '../../../Components/Alerts/alert-success/alert-success.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-agregar-prod',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertErrorComponent,
    AlertSuccessComponent,
    RouterLink
  ],
  
  animations: [
    trigger('shake', [
      transition('* => *', [ 
        animate('1s', keyframes([
          style({ transform: 'translateX(0)' }),
          style({ transform: 'translateX(-5px)' }), 
          style({ transform: 'translateX(5px)' }), 
          style({ transform: 'translateX(-7px)' }),
          style({ transform: 'translateX(7px)' }), 
          style({ transform: 'translateX(-10px)' }),
          style({ transform: 'translateX(0)' }),
        ]))
      ])
    ])
  ],
  templateUrl: './agregar-prod.component.html',
  styleUrl: './agregar-prod.component.css'
})
export class AgregarProdComponent {
  categories: Category[] = []
  id: number = 0
  name: string = ''
  price: string = ''
  stock: number = 0
  description: string = ''
  category_id: number = 0
  nameError:string = ''
  showNameError:boolean = false
  hasError: boolean = false;
  showSuccess: boolean = false;
  errorMessage: string = ''
  successMessage: string = ''
  disableButton: boolean = true;



  constructor(
    private readonly categoryService: CategoryServiceService,
    private readonly productService: ProductService
  ){}


  ngOnInit(){
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      (res) => {
        this.categories = res.categories
      },
      (err) => {
        console.log(err)
      }
    )
  }
  addProduct() {
    this.productService.storeProduct(this.name, this.price, this.stock, this.description, this.category_id)
      .subscribe(
        (res) => {
          this.showAlertSuccess('Producto agregado correctamente');
        },
        (err) => {
          if (err && err.error && err.error.error) {
            const firstError = this.getFirstError(err.error.error);
            this.showAlert(firstError);
          } else {
            console.error(err);
          }
        }
      );
  }
  
  getFirstError(errors: Record<string, string[]>): string {
    const firstErrorKey = Object.keys(errors)[0];
    return errors[firstErrorKey][0];
  }
  
  showAlert(message: string) {
    this.hasError = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.hasError = false;
    }, 2000);
  }

  showAlertSuccess(message: string) {
    this.showSuccess = true;
    this.successMessage = message;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }
}
