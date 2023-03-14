import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { authActions } from 'src/app/_core/state/auth/actions';
import { selectIsAdmin } from 'src/app/_core/state/auth/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAdmin$ = this.store.select(selectIsAdmin);
  constructor(private store: Store) {}

  onLogout(): void {
    this.store.dispatch(authActions.logoutStart());
  }
}
