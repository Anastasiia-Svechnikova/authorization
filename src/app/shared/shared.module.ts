import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ErrorComponent, LoaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ErrorComponent, LoaderComponent],
})
export class SharedModule {}
