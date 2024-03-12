import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aside-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.css'
})
export class AsideNavComponent {
  
  constructor( 
    private authService: AuthServiceService,
    private router: Router
    ) {}

  exit() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

}
