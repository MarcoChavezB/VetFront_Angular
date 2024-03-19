import { Component } from '@angular/core';
import { ProductService } from '../../../../Services/ProductService/product.service';
import { Venta } from '../../../../Models/Venta';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales-index',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './sales-index.component.html',
  styleUrl: './sales-index.component.css'
})
export class SalesIndexComponent {
  constructor(
    private readonly productoService : ProductService
  ){}

  ventas: Venta[] = [];

  ngOnInit(){
    this.getVentas()
  }

  getVentas(){
    this.productoService.getVentas().subscribe(
      (ventas) => {
        console.log(ventas)
        this.ventas = ventas
      }
    )
  }

}
