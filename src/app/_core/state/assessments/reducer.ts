import { createReducer, on } from '@ngrx/store';
import {
  AssessmentsList,
  IGraphData,
  UsersList,
} from '../../models/assessments.model';
import { assessmentActions } from './actions';

export interface IAssessmentState {
  loading: boolean;
  error: string | null;
  assessments: AssessmentsList;
  users: UsersList;
  graphData: IGraphData[];
  graphLoading: boolean | number;
}
const initialAssessmentState = {
  loading: false,
  error: null,
  assessments: [],
  users: [],
  graphData: [],
  graphLoading: false,
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
    (state, { id }): IAssessmentState => ({
      ...state,
      graphLoading: id,
    }),
  ),
  on(assessmentActions.loadedGraph, (state, { data, id }): IAssessmentState => {
    const graphData = [...state.graphData];
    graphData[id] = data;
    return {
      ...state,
      graphLoading: false,
      graphData,
    };
  }),
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
    (state, { error }): IAssessmentState => {
      return { ...state, error: error, loading: false };
    },
  ),
);
