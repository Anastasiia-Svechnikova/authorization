import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';

const routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class AdminModule {}
