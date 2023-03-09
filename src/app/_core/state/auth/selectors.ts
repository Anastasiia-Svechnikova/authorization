import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_STATE_NAME } from '../../constants/constants';
import { Role } from '../../models/auth.model';
import { IAuthState } from './reducer';

const selectAuthFeature = createFeatureSelector<IAuthState>(AUTH_STATE_NAME);
export const selectUser = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.user,
);
export const selectLoading = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.loading,
);
export const selectError = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.error,
);
export const selectToken = createSelector(
  selectAuthFeature,
  (state: IAuthState) => {
    return state.user ? state.user?.token : null;
  },
);
export const selectIsAdmin = createSelector(
  selectAuthFeature,
  (state: IAuthState) => {
    if (state.user) {
      return state.user.role === Role.admin ? true : false;
    }
    return false;
  },
);
