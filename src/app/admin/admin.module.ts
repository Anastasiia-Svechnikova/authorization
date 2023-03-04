import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../shared/material.module';
import { AdminComponent } from './admin.component';

const routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
