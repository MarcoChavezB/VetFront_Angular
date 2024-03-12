import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './alert-error.component.html',
  styleUrl: './alert-error.component.css'
})
export class AlertErrorComponent {
  @Input() message: string = 'Mensaje predeterminado';
}
