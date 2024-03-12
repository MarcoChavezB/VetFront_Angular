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


@Component({
  selector: 'app-agregar-prod',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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

  hasError: boolean = false;
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

  addProduct(){
    this.productService.storeProduct( this.name, this.price, this.stock, this.description, this.category_id).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err.error)
      }
    )
  }

}
