import { ApiService } from '@infordevjournal/core/http-client';
import { UserResponse } from '@infordevjournal/core/api-types';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser, LoginUserRequest, NewUserRequest, NewUser } from '@infordevjournal/core/api-types';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiService = inject(ApiService);

  user(): Observable<UserResponse> {
    return this.apiService.get<UserResponse>('/user');
  }

  login(credentials: LoginUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, LoginUserRequest>('/users/login', { user: credentials });
  }

  register(credentials: NewUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, NewUserRequest>('/users', { user: credentials });
  }
}
