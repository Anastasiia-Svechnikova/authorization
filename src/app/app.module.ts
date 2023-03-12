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
import { appState } from './_core/state/app-state';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { authEffects } from './_core/state/auth/effects';

import { assessmentEffects } from './_core/state/assessments/effects';
import { SharedModule } from './shared/shared.module';
import { AuthTokenInterceptor } from './_core/interceptors/auth-token.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SiteLayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appState),
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
