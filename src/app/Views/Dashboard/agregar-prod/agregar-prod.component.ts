import { Component, NgModule } from '@angular/core';
import { CategoryServiceService } from '../../../Services/CategoryService/category-service.service';
import { Category } from '../../../Models/Category';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../Services/ProductService/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-prod',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  templateUrl: './agregar-prod.component.html',
  styleUrl: './agregar-prod.component.css'
})
export class AgregarProdComponent {
  categories: Category[] = []
  id: number = 0
  name: string = 'Pastillas para garrapata'
  price: string = '90'
  stock: number = 5
  description: string = 'pastillas para garrapata para cachorro'
  category_id: number = 2

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
