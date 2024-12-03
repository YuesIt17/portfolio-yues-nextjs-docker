import {TChartDataLabel} from '@/utils/types';

export type TChartAxis = {
  points: string;
  typeAxis: 'x' | 'y';
  labels: TChartDataLabel[];
  labelPaddingX?: number;
  labelPaddingY?: number;
  maxDataX?: number;
};
