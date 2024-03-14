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
    CommonModule,
    RouterLink
  ],
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.css'
})
export class AsideNavComponent {
  
  constructor( 
    private authService: AuthServiceService,
    private readonly productService: ProductService,
    private router: Router
    ) {}

    guest: boolean = false;
    admin: boolean = false;
    user: boolean = false;


    totalProducts: number = 0;
    ngOnInit(){
    this.getNumberPord()
    this.checkRole()
  }


  checkRole() {
    const role = this.authService.getRole();
    switch (role) {
      case 0:
        this.guest = true;
        this.user = false;
        this.admin = false;
        break;
      case 1:
        this.guest = false;
        this.user = true;
        this.admin = false;
        break;
      case 2:
        this.guest = false;
        this.user = false;
        this.admin = true;
        break;
      default:
        this.guest = false;
        this.user = false;
        this.admin = false;
        break;
    }
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
