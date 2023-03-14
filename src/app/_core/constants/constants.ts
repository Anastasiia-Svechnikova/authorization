import { Color, ScaleType } from '@swimlane/ngx-charts';

export const AUTH_HEADER = 'X-Token';
export const ASSESSMENTS_STATE_NAME = 'assessments';
export const AUTH_STATE_NAME = 'auth';
export const CHART_PALETTE = ['#f9d048', '#f99848', '#65e665', '#70d2bd'];
export const CHART_PARAMS: Color = {
  name: 'myScheme',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: CHART_PALETTE,
};
