import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, Observable, take } from 'rxjs';
import { selectToken } from '../state/auth/selectors';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          console.log('no token');
          return next.handle(req);
        }
        console.log('yes token', token);
        const processedReq = req.clone({
          setHeaders: {
            'X-Token': token,
          },
        });
        return next.handle(processedReq);
      }),
    );
  }
}
