import {TColumnsValueAxis} from '../api/telegramChart/types';

export type TColumnValue = {
  values: TColumnsValueAxis;
  type: string;
  name: string;
  color: string;
};

export type TChartDataLabel = {
  label: string;
  coordinate: number;
};

export type TChartDataLine = {
  type: string;
  name: string;
  color: string;
  points: string;
  pointsMap: string;
  isVisible: boolean;
};

export type TChartPrepareData = {
  lines: TChartDataLine[];
  maxDataX: number;
  maxDataY: number;
  labelsX?: TChartDataLabel[];
  labelsY?: TChartDataLabel[];
};

export type TCoordinatePoint = {
  x: number;
  y: number;
};
