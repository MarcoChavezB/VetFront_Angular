
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../Services/ProductService/product.service';
import { CategoryServiceService } from '../../../Services/CategoryService/category-service.service';
import { Category } from '../../../Models/Category';
import { product } from '../../../Models/Product';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  search: string = '';
  categories: Category[] = []
  productResult: product[] = []
  @Output() selectedId:EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryServiceService
  ) { }

  ngOnInit(){
    this.getCategories()
  }

  resetSearch(){
    this.search = ''
    this.productResult = []
  }
  emitirId(id: number){
    this.selectedId.emit(id)
    this.resetSearch()
  }

  getProductSearch(){
    this.productService.getProduct(this.search).subscribe(
      (res) => {
        this.productResult = res.products
      },
      (err) => {
        console.log(err)
      }
    )
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
