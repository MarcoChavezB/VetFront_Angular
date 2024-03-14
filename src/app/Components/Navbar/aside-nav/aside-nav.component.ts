import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';
import { Router } from '@angular/router';
import { ProductService } from '../../../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside-nav',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.css'
})
export class AsideNavComponent {
  
  role:number | null = 0

  constructor( 
    private authService: AuthServiceService,
    private readonly productService: ProductService,
    private router: Router
    ) {}

    totalProducts: number = 0;
  ngOnInit(){
    this.getNumberPord()
    this.getrole()
  }

  getrole(){
    this.role = this.authService.getRole()
  }

  exit() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  getNumberPord(){
    this.productService.getTotalProducts().subscribe(
      (data) => {
        this.totalProducts = data.total
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
