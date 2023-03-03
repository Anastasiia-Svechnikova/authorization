import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

const data = {
  data: {
    agreeableness: 11.234,
    drive: 20.789,
    luck: 12.345,
    openness: 25.456,
  },
  type: 'bar',
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent {
  @Input() id!: number;

  saleData = [
    { name: 'Agreeableness', value: 11.234 },
    { name: 'Drive', value: 20.789 },
    { name: 'Luck', value: 12.345 },
    { name: 'Openness', value: 25.456 },
  ];

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f9d048', '#f99848', '#65e665', '#70d2bd'],
  };
}
