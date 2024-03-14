import { Component } from '@angular/core';
import {GlobalAlertService} from "../../Services/GlobalAlert/global-alert.service";
import {trigger, transition, style, animate} from "@angular/animations";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-global-alert',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <div *ngIf="message" [@fadeInOut] class="alert">
      {{ message }}
    </div>
  `,
  styles: [`
    .alert {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 1em;
      background-color: #808080;
      color: white;
      text-align: center;
      z-index: 1000;
      max-width: 80%;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  `],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('0.5s', style({opacity: 0}))
      ])
    ])

  ]
})





export class GlobalAlertComponent {
  message = '';

  constructor(private alertService: GlobalAlertService) {
    this.alertService.alert$.subscribe(message => this.message = message);
  }
}
