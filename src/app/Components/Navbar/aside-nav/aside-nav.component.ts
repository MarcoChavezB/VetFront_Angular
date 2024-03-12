import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';

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
    ) {}

  exit() {
    this.authService.logout()
  }

}
