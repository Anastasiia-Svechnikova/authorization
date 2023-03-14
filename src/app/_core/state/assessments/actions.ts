import { createActionGroup, emptyProps, props } from '@ngrx/store';

import {
  AssessmentsList,
  IGraphData,
  UsersList,
} from '../../models/assessments.model';

export const assessmentActions = createActionGroup({
  source: 'Assessment',
  events: {
    'Load assessments': emptyProps(),
    'Loaded assessments': props<{ data: AssessmentsList }>(),
    'Load graph': props<{ id: number }>(),
    'Loaded graph': props<{ data: IGraphData; id: number }>(),
    'Load users': emptyProps(),
    'Loaded users': props<{ data: UsersList }>(),
    'Assessment error': props<{ error: string }>(),
  },
});
