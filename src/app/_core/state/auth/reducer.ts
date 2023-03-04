import { createReducer, on } from '@ngrx/store';

import { IApiLoginResponse } from '../../models/auth.model';
import { authActions } from './actions';

export interface IInitialAuthState {
  user: IApiLoginResponse | null;
  loading: boolean;
  error: Error | null;
}

const initialAuthState: IInitialAuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.loginStart, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(authActions.loginSuccess, (_, { user }) => ({
    error: null,
    loading: false,
    user,
  })),
  on(authActions.logoutStart, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(authActions.logoutSuccess, (_) => ({
    error: null,
    loading: false,
    user: null,
  })),
  on(authActions.loginError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
