import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { AlertErrorComponent } from '../../../../Components/Alerts/alert-error/alert-error.component';
import { CategoryServiceService } from '../../../../Services/CategoryService/category-service.service';
import { Category, CategoryResult } from '../../../../Models/Category';
import { ModifyCategoryComponent } from '../modify-category/modify-category.component';

@Component({
  selector: 'app-categories-all',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AlertConfirmationComponent,
    AlertSuccessComponent,
    AlertErrorComponent,
    ModifyCategoryComponent,
  ],
  templateUrl: './categories-all.component.html',
  styleUrl: './categories-all.component.css'
})
export class CategoriesAllComponent {
 constructor(
  private readonly CategoriesService : CategoryServiceService
 ) {}

 categories: Category[] = []
 objectCategory: any = {}
 existCategoryes: boolean = true;
 alertSucces : boolean = false;
  alertDelete : boolean = false;
  message: string = '';
  id:number = 0
  modificar: boolean = false;

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.CategoriesService.getCategories().subscribe(
      (res) => {
        this.categories = res.categories
        if (this.categories.length == 0){
          this.existCategoryes = false;
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }

  modifyCategory(object : any){
    this.objectCategory = object;
    this.modificar = true;
  }

  closeModify(){
    this.modificar = false;
  }

  showAlertDelete(id : number, name: string){
    this.id = id;
    this.message = `¿Estas seguro que deseas eliminar la categoria ${name}?`
    this.alertDelete = true;
  }

  closeAlert(){
    this.alertDelete = false;
  }

  reloadCategories(){
    this.showAlert('success', 'La categoria fue modificada con exito')
    this.getCategories();
  }

  confirmDelete(){
    this.CategoriesService.destroyCategory(this.id).subscribe(
      (res) => {
        this.getCategories();
        this.alertDelete = false;
        this.showAlert('success', 'La categoria fue eliminada con exito')
      },
      (err) => {
        console.log(err)
      }
    )
  }


  showAlert(type: string, message: string){
    if(type == 'success'){
      this.alertSucces = true;
      this.message = message;
      setTimeout(() => {
        this.alertSucces = false;
      }, 3000);
    }
  }
 }
