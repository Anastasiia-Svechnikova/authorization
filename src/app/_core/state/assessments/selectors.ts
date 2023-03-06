import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAssessmentState } from './reducer';

const selectFeature = createFeatureSelector<IAssessmentState>('assessment');
export const selectAssessments = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.assessments,
);
export const selectUsers = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.users,
);
export const selectGraphData = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.graph.data,
);
export const selectGraphLoading = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.graph.loading,
);
export const selectLoading = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.loading,
);
export const selectError = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.error,
);
