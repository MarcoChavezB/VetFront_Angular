import { Component } from '@angular/core';
import { CategoryServiceService } from '../../../Services/CategoryService/category-service.service';
import { Category } from '../../../Models/Category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-prod',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './agregar-prod.component.html',
  styleUrl: './agregar-prod.component.css'
})
export class AgregarProdComponent {
  categories: Category[] = []

  constructor(
    private readonly categoryService: CategoryServiceService
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
