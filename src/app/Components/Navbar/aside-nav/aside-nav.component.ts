import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';
import { Router } from '@angular/router';
import { ProductService } from '../../../Services/ProductService/product.service';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../Services/WS/notification.service';

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
  
  role:number | null = 0

  constructor( 
    private authService: AuthServiceService,
    private readonly productService: ProductService,
    private router: Router,
    private readonly notificationService: NotificationService
    ) {}

    guest: boolean = false;
    admin: boolean = false;
    user: boolean = false;
    hasNotification: boolean = false;
    showNotificationsModal: boolean = false;
    totalProducts: number = 0;
    notifications: any[] = []
    showPunterNotify: boolean = false;
    Nnotify: number = 0;

  ngOnInit(){
    this.getNumberPord()
    this.getrole()

    if(this.role === 2){
      this.notificationService.lsitenToEvent((eventData) => {
        this.notifications = []
        this.notifications.push(eventData.message)
        this.Nnotify = this.notifications.length
        this.hasNotification = true
        this.showPunterNotify = true
      });
    }   
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

  showNotifications(){
    this.showPunterNotify = false
    this.hasNotification = false
    this.showNotificationsModal = !this.showNotificationsModal
  }

  showNotificationAlert(){
    this.showPunterNotify = !this.showPunterNotify
  }
}
