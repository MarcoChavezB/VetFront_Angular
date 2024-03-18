import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryServiceService } from '../../../../Services/CategoryService/category-service.service';
import { Category } from '../../../../Models/Category';

@Component({
  selector: 'app-modify-category',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './modify-category.component.html',
  styleUrl: './modify-category.component.css'
})
export class ModifyCategoryComponent {
  constructor(
  ) {}
  categoryName: string = ''
  categoryDescription: string = ''
  @Input() objectCategory: any = {}
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(){
    this.cargarInfo()
  }

  cargarInfo(){
    this.categoryName = this.objectCategory.category
    this.categoryDescription = this.objectCategory.description
  }


  closeModal(){
    this.close.emit(true)
  }



}
