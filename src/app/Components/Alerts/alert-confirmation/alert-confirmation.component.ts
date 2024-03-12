import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './alert-confirmation.component.html',
  styleUrl: './alert-confirmation.component.css'
})
export class AlertConfirmationComponent {
  @Input() message: string = 'Mensaje predeterminado';

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeAlert(){
    this.close.emit(true);
  }

  confirmAlert(){
    this.confirm.emit(true);
  }
}
