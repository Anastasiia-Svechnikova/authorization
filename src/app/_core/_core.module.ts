import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appState } from './state/app-state';
import { authEffects } from './state/auth/effects';
import { assessmentEffects } from './state/assessments/effects';
import { isDevMode, NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot(appState),
    EffectsModule.forRoot([authEffects, assessmentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  exports: [],
  declarations: [],
})
export class _CoreModule {}
