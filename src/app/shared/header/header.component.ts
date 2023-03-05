import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/_core/state/auth/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  onLogout(): void {
    this.store.dispatch(authActions.logoutStart());
  }
}
