import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import { environment } from '../../../environments/environment';
import {GlobalAlertService} from "../GlobalAlert/global-alert.service";
import {AuthServiceService} from "../AuthService/auth-service.service";

declare global {
  interface Window { Echo: Echo | undefined; }
}

@Injectable({
  providedIn: 'root'
})
export class EchoServiceService {
  pusherKey = environment.pusher.key;
  pusherCluster = environment.pusher.cluster;

  constructor(
    private alertService: GlobalAlertService,
    private authService: AuthServiceService
  ) {
    if (!window.Echo) {
      window.Echo = new Echo({
        broadcaster: 'pusher',
        key: this.pusherKey,
        cluster: this.pusherCluster,
        encrypted: false,
        wsHost: window.location.hostname,
        wssPort: 6001,
        wsPort: 6001,
        disableStats: true,
      });
    }
  }

  leaveChannel(channel: string) {
    if (window.Echo) {
      window.Echo.leave(channel);
    }
  }

  listen(channel: string, event: string, callback: Function) {
    window.Echo?.channel(channel).listen(event, callback);
  }

  listenToTestEvent() {
    window.Echo?.channel('test-channel')
      .listen('.test.event', (e: any) => {
        console.log('Event data:', e);
      });
  }

  listenToNewService(callback: (e: any) => void) {
    window.Echo?.channel('service-channel')
      .listen('.service.event', (e: any) => {
        callback(e);
      });
  }

  listenToNewAppointment(callback: (e: any) => void) {
    window.Echo?.channel('appointment-channel')
      .listen('.appointment.stored', (e: any) => {
        callback(e);
        if(this.authService.getRole() === 2){
          this.alertService.showAlert('Un nuevo usuario ha solicitado una cita');
        }
      });
  }

}
