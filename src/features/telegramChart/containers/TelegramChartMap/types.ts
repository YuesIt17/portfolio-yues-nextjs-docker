import {TChartDataLine} from '@/utils/types';

export type TTelegramChartMap = {
  width: number;
  data: TChartDataLine[];
  maxDataX: number;
  maxDataY: number;
};

export type TTelegramChartMapStyle = {
  width: number;
};
