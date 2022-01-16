import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { appConsts } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | null = null;
  private messagesSubject$ = new Subject<any>();

  public messages$ = this.messagesSubject$.pipe(
    catchError((e) => {
      throw e;
    }),
  );

  public open(): void {
    this.close();

    this.socket$ = this.createWebSocket();

    this.socket$.pipe(catchError((_) => EMPTY)).subscribe((message) => {
      this.messagesSubject$.next(message);
    });
  }

  public sendMessage(msg: any): void {
    this.socket$!.next(msg);
  }

  private close(): void {
    if (this.socket$) {
      this.socket$!.complete();
    }
  }

  private createWebSocket(): WebSocketSubject<any> {
    return webSocket(appConsts.WS_ENDPOINT);
  }
}
