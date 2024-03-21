import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatisticCardComponent } from '../../Components/Card/statistic-card/statistic-card.component';
import { AppointmentRequestService } from '../../Services/AppointmentService/appointment-request.service';
import { ProductService } from '../../Services/ProductService/product.service';
import { UserServiceService } from '../../Services/UserService/user-service.service';
import { product } from '../../Models/Product';
import { CommonModule } from '@angular/common';
import { AppointmentUser } from '../../Models/AppontmentUser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatisticCardComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalAppointments: number = 0;
  totalProducts: number = 0;
  totalUsers: number = 0;

  products: product[] = [];
  appointments: AppointmentUser[] = [];


  constructor(
    private readonly appointmentService: AppointmentRequestService,
    private readonly productService: ProductService,
    private readonly userService: UserServiceService,
  ){}

  ngOnInit(){
    this.polling()
  }



  getTotalAppointments(){
    this.appointmentService.getTotalAppointments().subscribe(
      (res) => {
        this.totalAppointments = res.total
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getTotalProducts(){
    this.productService.getTotalProducts().subscribe(
      (res) => {
        this.totalProducts = res.total
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getTotalUser(){
    this.userService.getTotalUsers().subscribe(
      (res) => {
        this.totalUsers = res.total
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getProductsStockBajo(){
    this.productService.getProductsStockBajo().subscribe(
      (res) => {
        this.products = res.products
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getAppointments(){
    this.appointmentService.getAppointmentsWithUser().subscribe(
      (res) => {
        this.appointments = res.info
      },
      (err) => {
        console.log(err);
      }
    )
  }
  polling(){
    setInterval(() => {
      this.getTotalAppointments();
      this.getTotalProducts();
      this.getTotalUser();
      this.getProductsStockBajo();
      this.getAppointments()
    }
    , 100000);
  }
}
