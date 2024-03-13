import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../Models/Category';
import { CategoryServiceService } from '../../../Services/CategoryService/category-service.service';
import { ProductService } from '../../../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertSuccessTopComponent } from '../../../Components/Alerts/alert-success-top/alert-success-top.component';
import { AlertErrorTopComponent } from '../../../Components/Alerts/alert-error-top/alert-error-top.component';

@Component({
  selector: 'app-modify-prod',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertSuccessTopComponent,
    AlertErrorTopComponent
  ],
  templateUrl: './modify-prod.component.html',
  styleUrl: './modify-prod.component.css'
})
export class ModifyProdComponent {
  categories: Category[] = []
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  id: number = 0
  name: string = ''
  price: string = ''
  stock: number = 0
  description: string = ''
  category_id: number = 0

  hasError: boolean = false;
  disableButton: boolean = true;

  showSuccess: boolean = false;
  showError: boolean = false;
  errorMessage: string = ''
  successMessage: string = ''

  @Input() idModify: number = 0
  @Input() objectProd: any = {}

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private readonly categoryService: CategoryServiceService,
    private readonly productService: ProductService
  ){}

  
  ngOnInit(){
    this.getCategories()
    this.inizializeData()
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

  modify(){
    this.productService.modifyProduct(this.idModify, this.name, this.price, this.stock, this.description, this.category_id).subscribe(
      (res) => {
        this.showAlertSuccess(res.message)
        this.refresh.emit(true)
      },
      (err) => {
          if (err && err.error && err.error.error) {
            const firstError = this.getFirstError(err.error.error);
            this.showAlert(firstError);
          } else {
            this.showAlert(err.error.message)
          }
      }
    )
  }

  cancel(){
    this.close.emit(true) 
  }

  inizializeData(){
    this.name = this.objectProd.name
    this.price = this.objectProd.price
    this.stock = this.objectProd.stock
    this.description = this.objectProd.description
    this.category_id = this.objectProd.category_id
  }


  getFirstError(errors: Record<string, string[]>): string {
    const firstErrorKey = Object.keys(errors)[0];
    return errors[firstErrorKey][0];
  }
  
  showAlert(message: string) {
    this.showError = true;
    this.errorMessage = message;
    setTimeout(() => {
      this.showError = false;
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
