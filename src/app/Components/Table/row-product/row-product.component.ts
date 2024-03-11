import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  @Input() stock: number = 0;
  @Input() description: string = '';
}
