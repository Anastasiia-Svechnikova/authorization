import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { selectToken } from '../state/auth/selectors';
import { Token } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isLoginRoute = state.url === '/login';
    return this.store.select(selectToken).pipe(
      map((token: Token) => {
        return (token && !isLoginRoute) || (!token && isLoginRoute);
      }),
      tap((result: boolean) => {
        if (!result) {
          const navigateTo = isLoginRoute ? '/' : '/login';
          this.router.navigate([navigateTo]);
        }
      }),
    );
  }
}
