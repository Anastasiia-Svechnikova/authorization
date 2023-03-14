import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { AdminGuard } from './_core/guards/admin.guard';
import { AuthGuard } from './_core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashBoardModule),
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
