import { Component } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trade-republic-tracker';

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.open();
  }
}
