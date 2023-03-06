import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAuthState } from './reducer';

const selectAuthFeature = createFeatureSelector<IAuthState>('auth');
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
