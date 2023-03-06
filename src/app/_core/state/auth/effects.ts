import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from '../../api/auth.service';
import { authActions } from './actions';

import { IApiLoginResponse } from '../../models/auth.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class authEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

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
          catchError((errResp: HttpErrorResponse) => {
            return of(authActions.authError(errResp));
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
  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.autoLogin),
      map(() => {
        const user = this.authService.getUserFromStorage();
        return authActions.loginSuccess({ user });
      }),
    );
  });
}
