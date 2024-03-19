import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { AlertErrorComponent } from '../../../../Components/Alerts/alert-error/alert-error.component';
import { CategoryServiceService } from '../../../../Services/CategoryService/category-service.service';
import { Category, CategoryResult } from '../../../../Models/Category';
import { ModifyCategoryComponent } from '../modify-category/modify-category.component';
import { AuthServiceService } from '../../../../Services/AuthService/auth-service.service';
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
  private readonly CategoriesService : CategoryServiceService,
  private readonly authService: AuthServiceService,
 ) {}



role:number | null = 0

getrole(){
  this.role = this.authService.getRole()
}

 categories: Category[] = []
 objectCategory: any = {}
 existCategoryes: boolean = true;
 alertSucces : boolean = false;
  alertDelete : boolean = false;
  message: string = '';
  id:number = 0
  modificar: boolean = false;

  guest: boolean = false;
  admin: boolean = false;
  user: boolean = false;

  ngOnInit(): void {
    this.getCategories();
    this.getrole();
  }

  checkRole() {
    const role = this.authService.getRole();
    switch (role) {
      case 0:
        this.guest = true;
        this.user = false;
        this.admin = false;
        break;
      case 1:
        this.guest = false;
        this.user = true;
        this.admin = false;
        break;
      case 2:
        this.guest = false;
        this.user = false;
        this.admin = true;
        break;
      default:
        this.guest = false;
        this.user = false;
        this.admin = false;
        break;
    }
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
