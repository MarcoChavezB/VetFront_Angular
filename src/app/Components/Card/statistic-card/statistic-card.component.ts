import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-card',
  standalone: true,
  imports: [],
  templateUrl: './statistic-card.component.html',
  styleUrl: './statistic-card.component.css'
})
export class StatisticCardComponent {
  @Input() title: string = 'title card';
  @Input() value: number = 0;
}
