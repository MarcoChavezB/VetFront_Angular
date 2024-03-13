import { Component } from '@angular/core';
import { RowProductComponent } from '../../../Components/Table/row-product/row-product.component';
import { CommonModule } from '@angular/common';
import { HeadProductComponent } from '../../../Components/Table/head-product/head-product.component';
import { ModifyProdComponent } from '../modify-prod/modify-prod.component';
import { AlertConfirmationComponent } from '../../../Components/Alerts/alert-confirmation/alert-confirmation.component';
import { AlertSuccessComponent } from '../../../Components/Alerts/alert-success/alert-success.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RowProductComponent,
    CommonModule,
    HeadProductComponent,
    ModifyProdComponent,
    AlertConfirmationComponent,
    AlertSuccessComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  selected: string = 'all';
  styleAll:boolean = true;
  styleActive:boolean = false;

  checkSelect(select:string){
    this.selected = select;
    if(this.selected == 'all'){
      this.styleAll = true;
      this.styleActive = false;
  }
    if(this.selected == 'active'){
      this.styleAll = false;
      this.styleActive = true;
    }
  }
}
