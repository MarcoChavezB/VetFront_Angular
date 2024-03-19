import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryServiceService } from '../../../../Services/CategoryService/category-service.service';
import { AlertErrorTopComponent } from '../../../../Components/Alerts/alert-error-top/alert-error-top.component';
import { AlertSuccessTopComponent } from '../../../../Components/Alerts/alert-success-top/alert-success-top.component';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertErrorTopComponent,
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(
    private readonly categoryService: CategoryServiceService
  ) {}
  categoryName: string = '' 
  categoryDescription: string = ''
  showAlert: boolean = false;
  showSuccess: boolean = false;
  messageError: string = ''
  messageSuccess: string = ''
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() success: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal(){
    console.log("emit")
    this.close.emit(true)
  }

  AddCategory(){
    this.categoryService.store(this.categoryName, this.categoryDescription).subscribe(
      (res) => {
        this.closeModal()
        this.success.emit(true)
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

  showAlertError(message: string){
    this.messageError = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 2000);
  }

  showAlertSuccess(message: string){
    this.messageSuccess = message;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }


}
