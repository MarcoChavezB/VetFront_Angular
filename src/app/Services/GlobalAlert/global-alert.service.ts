import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GlobalAlertService {

  private _alert = new Subject<string>();
  alert$ = this._alert.asObservable();

  showAlert(message: string) {
    this._alert.next(message);
    setTimeout(() => this._alert.next(''), 2500);
  }
}
