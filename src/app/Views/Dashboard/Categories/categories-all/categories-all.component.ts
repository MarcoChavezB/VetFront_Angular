import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { AlertErrorComponent } from '../../../../Components/Alerts/alert-error/alert-error.component';
import { CategoryServiceService } from '../../../../Services/CategoryService/category-service.service';
import { Category, CategoryResult } from '../../../../Models/Category';

@Component({
  selector: 'app-categories-all',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertConfirmationComponent,
    AlertSuccessComponent,
    AlertErrorComponent
  ],
  templateUrl: './categories-all.component.html',
  styleUrl: './categories-all.component.css'
})
export class CategoriesAllComponent {
 constructor(
  private readonly CategoriesService : CategoryServiceService
 ) {}

 categories: Category[] = []
 existCategoryes: boolean = true;
 alertSucces : boolean = false;
  alertDelete : boolean = false;
  message: string = '';

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.CategoriesService.getCategories().subscribe(
      (res) => {
        this.categories = res.categories
      },
      (err) => {
        console.log(err)
      }
    )
  }

  modifyCategory(id : number){

  }

  showAlertDelete(id : number){

  }

  closeAlert(){

  }

  closeSuccess(){

  }

  confirmDelete(){
  }


  showAlert(type: string, message: string){
    if(type == 'success'){
      this.alertSucces = true;
      this.message = message;
      setTimeout(() => {
        this.alertSucces = false;
      }, 3000);
    }
    if(type == 'delete'){
      this.alertDelete = true;
      this.message = message;
      setTimeout(() => {
        this.alertDelete = false;
      }, 3000);
    }
  }
 }
