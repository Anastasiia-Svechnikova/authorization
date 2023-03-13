import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AUTH_HEADER } from '../constants/constants';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept<T, U>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<U>> {
    const token = this.authService.getToken();
    if (token) {
      const processedReq = req.clone({
        setHeaders: {
          [AUTH_HEADER]: token,
        },
      });
      return next.handle(processedReq);
    }
    return next.handle(req);
  }
}
