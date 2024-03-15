import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthComponent } from './Layouts/auth/auth.component';
import {GlobalAlertComponent} from "./Components/global-alert/global-alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthComponent,
    GlobalAlertComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VetAngularV2';

  ngOnInit(){
    console.log("variable de entorno:" + environment.index)
  }
}
