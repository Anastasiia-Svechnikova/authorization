import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  AssessmentsList,
  IGraph,
  UsersList,
} from '../../models/assessments.model';

export const assessmentActions = createActionGroup({
  source: 'Assessment',
  events: {
    'Load assessments': emptyProps(),
    'Loaded assessments': props<{ data: AssessmentsList }>(),
    'Load graph': props<{ id: number }>(),
    'Loaded graph': props<{ data: IGraph }>(),
    'Load users': emptyProps(),
    'Loaded users': props<{ data: UsersList }>(),
    'Assessment error': props<{ error: Error }>(),
  },
});
