import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { selectIsAdmin } from '../state/auth/selectors';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select(selectIsAdmin).pipe(
      tap((result: boolean) => {
        if (!result) {
          this.router.navigate(['/']);
        }
      }),
    );
  }
}
