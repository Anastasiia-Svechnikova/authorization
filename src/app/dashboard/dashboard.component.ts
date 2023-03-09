import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { assessmentActions } from '../_core/state/assessments/actions';
import {
  selectAssessments,
  selectError,
  selectLoading,
} from '../_core/state/assessments/selectors';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  assessments$ = this.store.select(selectAssessments);
  error$ = this.store.select(selectError);
  loading$ = this.store.select(selectLoading);
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(assessmentActions.loadAssessments());
  }
}
