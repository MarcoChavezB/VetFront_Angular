import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-alert-success-top',
  standalone: true,
  imports: [],
  templateUrl: './alert-success-top.component.html',
  styleUrl: './alert-success-top.component.css'
})
export class AlertSuccessTopComponent {
  @Input() message: string = 'Mensaje predeterminado';
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeAlert(){
    this.close.emit(true);
  }
}
