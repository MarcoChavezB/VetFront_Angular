import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-head-product',
  standalone: true,
  imports: [],
  templateUrl: './head-product.component.html',
  styleUrl: './head-product.component.css'
})
export class HeadProductComponent {
  @Input() nameHead: string = '';
  @Input() categoryHead: string = '';
  @Input() stockHead: string = '';
  @Input() descriptionHead: string = '';
}
