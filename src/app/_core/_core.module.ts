import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { isDevMode, NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { appState } from './state/app-state';
import { assessmentEffects } from './state/assessments/effects';
import { authEffects } from './state/auth/effects';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AssessmentService } from './api/assessment.service';

@NgModule({
  imports: [
    StoreModule.forRoot(appState),
    EffectsModule.forRoot([authEffects, assessmentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    AssessmentService,
    AdminGuard,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class _CoreModule {}
