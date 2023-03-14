import {
  ASSESSMENTS_STATE_NAME,
  AUTH_STATE_NAME,
} from '../constants/constants';
import { assessmentReducer } from './assessments/reducer';
import { authReducer } from './auth/reducer';

export const appState = {
  [AUTH_STATE_NAME]: authReducer,
  [ASSESSMENTS_STATE_NAME]: assessmentReducer,
};
