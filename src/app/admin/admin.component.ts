import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { assessmentActions } from '../_core/state/assessments/actions';
import { selectUsers } from '../_core/state/assessments/selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  users$ = this.store.select(selectUsers);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(assessmentActions.loadUsers());
  }
}
