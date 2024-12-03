import {TChartDataLine, TChartPrepareData} from '@/utils/types';

export type TChartClassData = {
  lines: TChartDataLine[] | TChartDataLine;
} & Omit<TChartPrepareData, 'lines'>;
