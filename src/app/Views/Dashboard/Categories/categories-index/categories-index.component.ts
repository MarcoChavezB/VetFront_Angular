import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categories-index',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './categories-index.component.html',
  styleUrl: './categories-index.component.css'
})
export class CategoriesIndexComponent {
  selected: string = 'all';
  styleAll:boolean = true;
  styleActive:boolean = false;

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

}
