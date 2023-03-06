import { createReducer, on } from '@ngrx/store';
import {
  AssessmentsList,
  IGraph,
  UsersList,
} from '../../models/assessments.model';
import { assessmentActions } from './actions';

export interface IAssessmentState {
  loading: boolean;
  error: Error | null;
  assessments: AssessmentsList;
  users: UsersList;
  graph: {
    loading: boolean;
    data: IGraph | null;
  };
}
const initialAssessmentState = {
  loading: false,
  error: null,
  assessments: [],
  users: [],
  graph: {
    loading: false,
    data: null,
  },
};
export const assessmentReducer = createReducer<IAssessmentState>(
  initialAssessmentState,
  on(
    assessmentActions.loadAssessments,
    (state): IAssessmentState => ({ ...state, loading: true, error: null }),
  ),
  on(
    assessmentActions.loadedAssessments,
    (state, { data }): IAssessmentState => ({
      ...state,
      loading: false,
      error: null,
      assessments: data,
    }),
  ),
  on(
    assessmentActions.loadGraph,
    (state): IAssessmentState => ({
      ...state,
      graph: { loading: true, data: null },
    }),
  ),
  on(
    assessmentActions.loadedGraph,
    (state, { data }): IAssessmentState => ({
      ...state,
      graph: { loading: false, data },
    }),
  ),
  on(
    assessmentActions.loadUsers,
    (state): IAssessmentState => ({ ...state, loading: true, error: null }),
  ),
  on(
    assessmentActions.loadedUsers,
    (state, { data }): IAssessmentState => ({
      ...state,
      loading: false,
      error: null,
      users: data,
    }),
  ),
  on(
    assessmentActions.assessmentError,
    (state, { error }): IAssessmentState => ({ ...state, error }),
  ),
);
