import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertConfirmationComponent } from '../../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../../Components/Alerts/alert-success/alert-success.component';
import { AlertErrorComponent } from '../../../../Components/Alerts/alert-error/alert-error.component';
import { Category } from '../../../../Models/Category';
import { CategoryServiceService } from '../../../../Services/CategoryService/category-service.service';

@Component({
  selector: 'app-categories-desactivated',
  standalone: true,
  imports: [
    CommonModule,
    AlertConfirmationComponent,
    AlertSuccessComponent,
    AlertErrorComponent
  ],
  templateUrl: './categories-desactivated.component.html',
  styleUrl: './categories-desactivated.component.css'
})
export class CategoriesDesactivatedComponent {
  constructor(
    private readonly CategoriesService : CategoryServiceService
   ) {}
 categories: Category[] = []
 existCategoryes: boolean = true;
 alertSucces : boolean = false;
  alertActivate : boolean = false;
  message: string = '';
  id:number = 0

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.CategoriesService.getCategoriesDisabled().subscribe(
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



  showAlertActivate(id : number, name: string){
    this.id = id;
    this.message = `¿Estas seguro que deseas activar la categoria ${name}?`
    this.alertActivate = true;
  }

  closeAlert(){
    this.alertActivate = false;
  }

  closeSuccess(){
    this.alertSucces = false;
  }

  confirmActivate(){
    this.CategoriesService.activateCategory(this.id).subscribe(
      (res) => {
        this.getCategories();
        this.alertActivate = false;
        this.showAlert('success', 'Categoria activata correctamente')
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

