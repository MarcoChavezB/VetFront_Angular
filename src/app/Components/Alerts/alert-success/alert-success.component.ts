import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  standalone: true,
  imports: [],
  templateUrl: './alert-success.component.html',
  styleUrl: './alert-success.component.css'
})
export class AlertSuccessComponent {
  @Input() message: string = 'Mensaje predeterminado';

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeAlert(){
    this.close.emit(true);
  }
}
