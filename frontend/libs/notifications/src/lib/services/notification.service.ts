import { inject, Injectable } from '@angular/core';
import { ApiService } from '@infordevjournal/core/http-client';
import { Observable } from 'rxjs';
import { NotificationsResponse } from '../models/notification.model';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly apiService = inject(ApiService);

  public getNotification(): Observable<NotificationsResponse> {
    return this.apiService.get<NotificationsResponse>('/notifications');
  }

  public pushNotification<T,D>(body: D): Observable<T> {
    return this.apiService.post<T,D>(`/notifications`, body );
  }
}