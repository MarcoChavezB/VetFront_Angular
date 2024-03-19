import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AlertSuccessTopComponent } from '../../../../Components/Alerts/alert-success-top/alert-success-top.component';
import { AuthServiceService } from '../../../../Services/AuthService/auth-service.service';
@Component({
  selector: 'app-categories-index',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    RouterLink,
    AddCategoryComponent,
    AlertSuccessTopComponent
  ],
  templateUrl: './categories-index.component.html',
  styleUrl: './categories-index.component.css'
})
export class CategoriesIndexComponent {
  selected: string = 'all';
  successMessage:string = '';
  styleAll:boolean = true;
  styleActive:boolean = false;
  showAddCategory: boolean = false;
  showAddCategorySuccess: boolean = false;

  constructor(
    private readonly authservice: AuthServiceService,
   ) {}
  
   ngOnInit(): void {
    this.getrole();
  }
  role:number | null = 0
  
  getrole(){
    this.role = this.authservice.getRole()
  }

  checkSelect(select:string){
    this.selected = select;
    if(this.selected == 'all'){
      this.styleAll = true;
      this.styleActive = false;
  }
    if(this.selected == 'desactivated'){
      this.styleAll = false;
      this.styleActive = true;
    }
  }
  closeModal(){
    this.showAddCategory = false;
    this.showAddCategorySuccess = false;
  }
  addCategory(){
    this.showAddCategory = true;
  }

  reloadCategories(){
    this.showAddCategorySuccess = true;
    setTimeout(() => {
      this.showAddCategorySuccess = false;
    }
    , 2000);
  }

  showAlertSuccess(message: string){
    this.successMessage = message;
    this.showAddCategorySuccess = true;
    setTimeout(() => {
      this.showAddCategorySuccess = false;
    }
    , 2000);
  }

}
