import { Component } from '@angular/core';
import { RowProductComponent } from '../../../Components/Table/row-product/row-product.component';
import { ProductService } from '../../../Services/ProductService/product.service';
import { product, productResult } from '../../../Models/Product';
import { CommonModule } from '@angular/common';
import { HeadProductComponent } from '../../../Components/Table/head-product/head-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RowProductComponent,
    CommonModule,
    HeadProductComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: product[] = [];
  nombresPropiedades: string[] = [];


  constructor(private readonly ProdService: ProductService) {
    
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.ProdService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        console.log(this.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
