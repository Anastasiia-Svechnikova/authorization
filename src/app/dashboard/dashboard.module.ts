import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { GraphComponent } from './graph/graph.component';

const routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, GraphComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class DashBoardModule {}
