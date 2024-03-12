import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatisticCardComponent } from '../../Components/Card/statistic-card/statistic-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    StatisticCardComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
