import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IInitialAuthState } from './reducer';

const selectAuthFeature = createFeatureSelector<IInitialAuthState>('auth');
export const selectUser = createSelector(
  selectAuthFeature,
  (state: IInitialAuthState) => state.user,
);
export const selectLoading = createSelector(
  selectAuthFeature,
  (state: IInitialAuthState) => state.loading,
);
export const selectError = createSelector(
  selectAuthFeature,
  (state: IInitialAuthState) => state.error,
);
export const selectToken = createSelector(
  selectAuthFeature,
  (state: IInitialAuthState) => {
    return state.user ? state.user?.token : null;
  },
);
