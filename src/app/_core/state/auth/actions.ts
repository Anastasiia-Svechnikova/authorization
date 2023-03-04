import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IApiLoginResponse, IUser } from '../../models/auth.model';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login start': props<{ user: IUser }>(),
    'Login success': props<{ user: IApiLoginResponse }>(),
    'Logout start': emptyProps(),
    'Logout success': emptyProps(),
    'Login Error': props<{ error: Error }>(),
  },
});
