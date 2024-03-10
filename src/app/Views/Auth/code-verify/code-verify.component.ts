import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ElementRef, ViewChild,  } from '@angular/core';
import { UserServiceService } from '../../../Services/UserService/user-service.service';
import { userInfo } from 'os';
import { AuthServiceService } from '../../../Services/AuthService/auth-service.service';

@Component({
  selector: 'app-code-verify',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './code-verify.component.html',
  styleUrl: './code-verify.component.css'
})
export class CodeVerifyComponent {
  constructor(
    private readonly DataSVuser: UserServiceService,
    private readonly AuthService: AuthServiceService
  ) { }

  @ViewChild('code1') code1: ElementRef | undefined;
  @ViewChild('code2') code2: ElementRef | undefined;
  @ViewChild('code3') code3: ElementRef | undefined;
  @ViewChild('code4') code4: ElementRef | undefined;
  @ViewChild('code5') code5: ElementRef | undefined;
  @ViewChild('code6') code6: ElementRef | undefined;

  code = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: ""
  };
  
  codigo: string = "";
  userId: string = "";

  cambiarFoco(inputNumber: number) {
    if (inputNumber >= 1 && inputNumber <= 6) {
      const currentInputKey = `code${inputNumber}` as keyof CodeVerifyComponent;
      const currentInputElement = this[currentInputKey] as ElementRef<HTMLInputElement>;
  
      let nextInputNumber: number;
  
      if (currentInputElement && currentInputElement.nativeElement.value.length > 0) {
        nextInputNumber = inputNumber + 1;
      } else {
        nextInputNumber = inputNumber - 1;
      }
  
      const nextInputKey = `code${nextInputNumber}` as keyof CodeVerifyComponent;
      const nextInputElement = this[nextInputKey] as ElementRef<HTMLInputElement>;
  
      if (nextInputElement) {
        nextInputElement.nativeElement.focus();
      }
    }
  }

  verifyCode(){
    this.codigo = Object.values(this.code).join("")
    this.userId = this.AuthService.getUserId()

    this.DataSVuser.verifyCode(this.userId, this.codigo).subscribe(
      (res) => {
        
        
      },
      (error) => {
        
      }
    )
  }
}