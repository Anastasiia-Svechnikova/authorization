import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ASSESSMENTS_STATE_NAME } from '../../constants/constants';
import { IAssessmentState } from './reducer';

const selectFeature = createFeatureSelector<IAssessmentState>(
  ASSESSMENTS_STATE_NAME,
);
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
  (state: IAssessmentState) => state.graphData,
);

export const selectLoading = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.loading,
);
export const selectGraphLoading = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.graphLoading,
);
export const selectError = createSelector(
  selectFeature,
  (state: IAssessmentState) => state.error,
);
