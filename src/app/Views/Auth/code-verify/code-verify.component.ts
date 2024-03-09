import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ElementRef, ViewChild,  } from '@angular/core';

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

  concatenatedCode: string = "";

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
  
  
  
  getCode() {
    this.concatenatedCode = Object.values(this.code).join("");
    console.log(this.concatenatedCode);
    return this.concatenatedCode;
  }
}