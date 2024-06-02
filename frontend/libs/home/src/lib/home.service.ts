import { ApiService } from '@infordevjournal/core/http-client';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private readonly apiService = inject(ApiService);

  getTags(): Observable<{ tags: string[] }> {
    return this.apiService.get('/tags');
  }

  createTag(tag: string): Observable<{ tag: string }>{
    return this.apiService.post<{ tag: string }, { tag: string }>('/tags', { tag })
  }
}
