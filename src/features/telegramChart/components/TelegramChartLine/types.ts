import {TChartDataLine, TChartPrepareData} from '@/utils/types';

export type TTelegramChartLine = {
  data: TChartDataLine[];
  width?: number;
  peddingSize?: number;
} & Omit<TChartPrepareData, 'lines'>;
