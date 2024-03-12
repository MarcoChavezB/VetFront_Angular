import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../Models/Category';
import { CategoryServiceService } from '../../../Services/CategoryService/category-service.service';
import { ProductService } from '../../../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-prod',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './modify-prod.component.html',
  styleUrl: './modify-prod.component.css'
})
export class ModifyProdComponent {
  categories: Category[] = []
  id: number = 0
  name: string = ''
  price: string = ''
  stock: number = 0
  description: string = ''
  category_id: number = 0

  hasError: boolean = false;
  disableButton: boolean = true;

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
        console.log(res)
      },
      (err) => {
        console.log(err)
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
}
