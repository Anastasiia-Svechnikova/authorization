import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from '../../api/auth.service';
import { authActions } from './actions';

import { IApiLoginResponse } from '../../models/auth.model';

@Injectable()
export class authEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.loginStart),
      exhaustMap(({ user }) => {
        console.log(user);
        return this.authService.login(user).pipe(
          map((response: IApiLoginResponse) => {
            this.authService.saveUserToStorage(response);
            return authActions.loginSuccess({ user: response });
          }),
          catchError((errResp) => {
            return of(authActions.error(errResp));
          }),
        );
      }),
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.logoutStart),
      map(() => {
        this.authService.logout();
        return authActions.logoutSuccess();
      }),
    );
  });
}
