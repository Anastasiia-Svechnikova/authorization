import { createReducer, on } from '@ngrx/store';

import { IApiLoginResponse } from '../../models/auth.model';
import { authActions } from './actions';

export interface IAuthState {
  user: IApiLoginResponse | null;
  loading: boolean;
  error: Error | null;
}

const initialAuthState: IAuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer<IAuthState>(
  initialAuthState,
  on(
    authActions.loginStart,
    (state): IAuthState => ({
      ...state,
      loading: true,
      error: null,
    }),
  ),
  on(
    authActions.loginSuccess,
    (_, { user }): IAuthState => ({
      error: null,
      loading: false,
      user,
    }),
  ),
  on(
    authActions.logoutStart,
    (state): IAuthState => ({
      ...state,
      loading: true,
      error: null,
    }),
  ),
  on(
    authActions.logoutSuccess,
    (): IAuthState => ({
      error: null,
      loading: false,
      user: null,
    }),
  ),
  on(
    authActions.authError,
    (state, { error }): IAuthState => ({
      ...state,
      loading: false,
      error,
    }),
  ),
);
