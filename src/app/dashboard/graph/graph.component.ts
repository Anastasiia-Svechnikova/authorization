import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { CHART_PARAMS } from 'src/app/_core/constants/constants';
import { assessmentActions } from 'src/app/_core/state/assessments/actions';
import {
  selectGraphData,
  selectGraphLoading,
} from 'src/app/_core/state/assessments/selectors';
import { transformGraphData } from './transform-graph-data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() id!: number;
  loading$ = this.store.select(selectGraphLoading);

  colorScheme = CHART_PARAMS;
  graphData$ = this.store.select(selectGraphData).pipe(
    map((data) => {
      const selectedGraph = data[this.id];
      if (selectedGraph) {
        return transformGraphData(selectedGraph);
      }
      return null;
    }),
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(assessmentActions.loadGraph({ id: this.id }));
  }
}
