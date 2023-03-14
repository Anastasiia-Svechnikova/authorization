import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';

const routes = [
  {
    path: '',
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [AuthService],
})
export class AuthModule {}
