import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { Article } from '@infordevjournal/core/api-types/src';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:5000');
  }

  private onEvent<T>(eventName: string): Observable<T> {
    return new Observable<T>(observer => {
      this.socket.on(eventName, (data: T) => observer.next(data));
    });
  }

  public onNewArticle(): Observable<Article[]>{
    return this.onEvent<Article[]>('articles')
  }

}
