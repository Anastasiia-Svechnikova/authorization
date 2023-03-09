import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import {
  IApiLoginResponse,
  IUser,
  localStorageUser,
} from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public login(user: IUser): Observable<IApiLoginResponse> {
    return this.http.post<IApiLoginResponse>(`${this.API_URL}/login`, user);
  }
  public logout(): void {
    this.saveUserToStorage();
  }
  public saveUserToStorage(user: localStorageUser = null): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUserFromStorage(): IApiLoginResponse {
    const user = localStorage.getItem('user');
    const parsedUser = user && JSON.parse(user);
    return parsedUser;
  }
}
