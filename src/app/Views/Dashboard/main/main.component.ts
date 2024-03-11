import { Component } from '@angular/core';
import { AsideNavComponent } from '../../../Components/Navbar/aside-nav/aside-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AsideNavComponent,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
