import { Injectable } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AssetPriceUpdateMessage } from 'src/app/interfaces/asset.interface';

@Injectable({
  providedIn: 'root',
})
export class AssetPriceService {
  public assetUpdate$: Observable<AssetPriceUpdateMessage>;

  constructor(private webSocket: WebSocketService) {
    this.assetUpdate$ = this.webSocket.messages$.pipe(
      filter((message) => this.isAssetPriceUpdateMessage(message)),
    );
  }

  trackAssetPrice(isin: string): void {
    this.webSocket.sendMessage({ subscribe: isin });
  }

  stopTrackingAssetPrice(isin: string): void {
    this.webSocket.sendMessage({ unsubscribe: isin });
  }

  // there's no topic provided to identify type of WS message, so we should check that the message contains `isin` and `price`
  // so we can assume that that's asset price update message
  private isAssetPriceUpdateMessage(message: any): message is AssetPriceUpdateMessage {
    return message?.hasOwnProperty('isin') && message?.hasOwnProperty('price');
  }
}
