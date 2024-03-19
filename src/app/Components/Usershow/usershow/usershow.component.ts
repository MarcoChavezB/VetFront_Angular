import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { userinterfacelog } from '../../../Models/user';
@Component({
  selector: 'app-usershow',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './usershow.component.html',
  styleUrl: './usershow.component.css'
})
export class UsershowComponent {

  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  user: userinterfacelog = {
    id: 0,
    name: '',
    email: '',
    email_verified_at: '',
    created_at: '',
    updated_at: '',
    account_active: false,
    role: ''
  }


  @Input() idModify: number = 0
  @Input() objectProd: any = {}

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  ngOnInit(){
    this.inizializeData()
  }

  cancel(){
    this.close.emit(true) 
  }

  inizializeData(){
    this.user.id = this.objectProd.id
    this.user.name = this.objectProd.name
    this.user.email = this.objectProd.email
    this.user.email_verified_at = this.objectProd.email_verified_at
    this.user.account_active = this.objectProd.account_active
    this.user.role = this.objectProd.role
    this.user.created_at = this.objectProd.created_at
    this.user.updated_at = this.objectProd.updated_at
  }

}
