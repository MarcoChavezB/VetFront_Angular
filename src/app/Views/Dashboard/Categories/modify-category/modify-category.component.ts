import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryServiceService } from '../../../../Services/CategoryService/category-service.service';
import { AlertErrorTopComponent } from '../../../../Components/Alerts/alert-error-top/alert-error-top.component';
//import { set } from 'vue/types/umd';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modify-category',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AlertErrorTopComponent
  ],
  templateUrl: './modify-category.component.html',
  styleUrl: './modify-category.component.css'
})
export class ModifyCategoryComponent {
  constructor(
    private readonly categoryService: CategoryServiceService
  ) {}
  categoryName: string = ''
  categoryDescription: string = ''
  showAlert: boolean = false;
  messageError: string = ''
  @Input() objectCategory: any = {}
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() success: EventEmitter<boolean> = new EventEmitter<boolean>();


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

  modifyCategory(){
    this.categoryService.updateCategory(this.objectCategory.id, this.categoryName, this.categoryDescription).subscribe(
      (res) => {
        this.success.emit(true)
        this.closeModal()
      },
      (err) => {
        if (err && err.error && err.error.error) {
          const firstError = this.getFirstError(err.error.error);
          this.showAlertError(firstError);
        } else {
          this.showAlertError(err.error.message)
        }
      }
    )
  }


  getFirstError(errors: Record<string, string[]>): string {
    const firstErrorKey = Object.keys(errors)[0];
    return errors[firstErrorKey][0];
  }

  showAlertError(message: string) {
    this.messageError = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }
    , 2000);
  }




}
