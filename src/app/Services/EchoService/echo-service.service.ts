import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import { environment } from '../../../environments/environment';

declare global {
  interface Window { Echo: Echo | undefined; }
}

@Injectable({
  providedIn: 'root'
})
export class EchoServiceService {
  pusherKey = environment.pusher.key;
  pusherCluster = environment.pusher.cluster;

  constructor() {
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

  listen(channel: string, event: string, callback: Function) {
    window.Echo?.channel(channel).listen(event, callback);
  }

  listenToTestEvent() {
    window.Echo?.channel('test-channel')
      .listen('.testevent', (e: any) => { 
        console.log('Event data:', e);
      });
  }
}
