import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectToken } from '../state/auth/selectors';
import { AUTH_HEADER } from '../constants/constants';
import { Token } from '../models/auth.model';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}
  intercept<T, U>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<U>> {
    return this.store.select(selectToken).pipe(
      take(1),
      exhaustMap((token: Token) => {
        if (!token) {
          return next.handle(req);
        }
        const processedReq = req.clone({
          setHeaders: {
            [AUTH_HEADER]: token,
          },
        });
        return next.handle(processedReq);
      }),
    );
  }
}
