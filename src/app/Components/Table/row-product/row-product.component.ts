import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-row-product',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './row-product.component.html',
  styleUrl: './row-product.component.css'
})
export class RowProductComponent {
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() category: number = 0;
  @Input() stock: number = 0;
  @Input() description: string = '';

  @Output() getEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() getEmitDelete: EventEmitter<boolean> = new EventEmitter<boolean>();

  modifyProduct(){
    this.getEmit.emit(true);
  }
  deleteProduct(){
    this.getEmitDelete.emit(true);  
  }
}
