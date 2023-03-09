import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';

import { AssessmentService } from '../../api/assessment.service';
import {
  AssessmentsList,
  IGraphData,
  UsersList,
} from '../../models/assessments.model';
import { assessmentActions } from './actions';

@Injectable()
export class assessmentEffects {
  constructor(
    private actions$: Actions,
    private assessmentService: AssessmentService,
  ) {}
  loadAssessments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(assessmentActions.loadAssessments),
      mergeMap(() => {
        return this.assessmentService.getAssessments().pipe(
          map((data: AssessmentsList) => {
            return assessmentActions.loadedAssessments({ data });
          }),
          catchError((errResp: HttpErrorResponse) => {
            return of(
              assessmentActions.assessmentError({ error: errResp.message }),
            );
          }),
        );
      }),
    );
  });
  loadGraph$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(assessmentActions.loadGraph),
      mergeMap(({ id }) => {
        return this.assessmentService.getGraph(id).pipe(
          map((data: IGraphData) => {
            return assessmentActions.loadedGraph({ data, id });
          }),
          catchError((errResp: HttpErrorResponse) => {
            return of(
              assessmentActions.assessmentError({ error: errResp.message }),
            );
          }),
        );
      }),
    );
  });
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(assessmentActions.loadUsers),
      mergeMap(() => {
        return this.assessmentService.getUsers().pipe(
          map((data: UsersList) => {
            return assessmentActions.loadedUsers({ data });
          }),
          catchError((errResp: HttpErrorResponse) => {
            return of(
              assessmentActions.assessmentError({ error: errResp.message }),
            );
          }),
        );
      }),
    );
  });
}
