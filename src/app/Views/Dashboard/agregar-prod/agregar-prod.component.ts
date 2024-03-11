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
  name: string = ''
  price: string = ''
  stock: number = 0
  description: string = ''
  category_id: number = 0

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


}
