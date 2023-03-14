import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { _CoreModule } from './_core/_core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SiteLayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    _CoreModule,
    SharedModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
