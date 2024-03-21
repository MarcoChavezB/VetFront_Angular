import { Component } from '@angular/core';
import { AsideNavComponent } from '../../../Components/Navbar/aside-nav/aside-nav.component';
import { RouterOutlet } from '@angular/router';
import { EchoServiceService } from '../../../Services/EchoService/echo-service.service';
import { GlobalAlertComponent } from '../../../Components/global-alert/global-alert.component';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';
import { GlobalAlertService } from '../../../Services/GlobalAlert/global-alert.service';
import { AlertSuccessComponent } from '../../../Components/Alerts/alert-success/alert-success.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AsideNavComponent,
    RouterOutlet,
    AlertSuccessComponent,
    CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(
    private readonly echoService : EchoServiceService,
    private authService: AuthServiceService,
    private alertService: GlobalAlertService,
  ){}

  showalert: boolean = false
  message: string = ""
  ngOnInit(){
    console.log("Escuchando websocket")
    this.echoService.listenToNewAppointment((e: any) => {
      if(this.authService.getRole() === 2){
        this.showAlert("Se agendo una cita")
      }
    });
  }


  showAlert(message: string){
    this.showalert = true
    this.message = message

    setTimeout(() => {
      this.showalert = false
    }, 2000);
  }
}
