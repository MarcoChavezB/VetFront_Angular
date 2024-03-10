import { Component } from '@angular/core';
import { AsideNavComponent } from '../../../Components/Navbar/aside-nav/aside-nav.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AsideNavComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
