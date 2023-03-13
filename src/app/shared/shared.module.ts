import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ErrorComponent, LoaderComponent],
  exports: [
    ErrorComponent,
    LoaderComponent,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
