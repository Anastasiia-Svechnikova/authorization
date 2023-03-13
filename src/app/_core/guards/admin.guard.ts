import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { Role } from '../models/auth.model';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    const role = this.authService.getRole();
    if (role !== Role.admin) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
