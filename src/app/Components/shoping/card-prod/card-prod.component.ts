import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-prod',
  standalone: true,
  imports: [],
  templateUrl: './card-prod.component.html',
  styleUrl: './card-prod.component.css'
})
export class CardProdComponent {
  @Input() title: string = 'title card'; 
  @Input() price: number = 0;
  @Input() description: string = 'description card';
  @Input() cantidad: number = 0;

  @Output() delete:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() add:EventEmitter<boolean> = new EventEmitter<boolean>();

  deleteProd(){
    this.delete.emit(true);
  }
  addProd(){
    this.add.emit(true);
  }
}
