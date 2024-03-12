import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error-top',
  standalone: true,
  imports: [],
  templateUrl: './alert-error-top.component.html',
  styleUrl: './alert-error-top.component.css'
})
export class AlertErrorTopComponent {
  @Input() message: string = 'Mensaje predeterminado';

}
