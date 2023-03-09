import { map } from 'rxjs/operators';
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
    return this.store.select(selectToken).pipe(
      map((token: Token) => {
        if (!token && state.url !== '/login') {
          this.router.navigate(['/login']);
          return false;
        } else if (token && state.url === '/login') {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }),
    );
  }
}
