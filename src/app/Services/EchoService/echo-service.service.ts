import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
declare global {
  interface Window { Echo: any; }
}

@Injectable({
  providedIn: 'root'
})
export class EchoServiceService {
  private echo: Echo;

  constructor() {
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: 'tu-key-de-pusher',
      cluster: 'tu-cluster-de-pusher',
      encrypted: true,
    });
  }

  listen(channel: string, event: string, callback: Function) {
    this.echo.channel(channel).listen(event, callback);
  }
}
