import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
  imports: [NgxChartsModule, RouterModule.forChild(routes), SharedModule],
})
export class DashBoardModule {}
