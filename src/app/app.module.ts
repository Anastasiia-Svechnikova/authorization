import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { GraphComponent } from './dashboard/graph/graph.component';
import { authReducer } from './_core/state/auth/reducer';
import { authEffects } from './_core/state/auth/effects';
import { AuthTokenInterceptor } from './_core/interceptors/authToken.interceptor';
import { assessmentEffects } from './_core/state/assessments/effects';
import { assessmentReducer } from './_core/state/assessments/reducer';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiteLayoutComponent,
    DashboardComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ auth: authReducer, assessments: assessmentReducer }),
    EffectsModule.forRoot([authEffects, assessmentEffects]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    NgxChartsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
