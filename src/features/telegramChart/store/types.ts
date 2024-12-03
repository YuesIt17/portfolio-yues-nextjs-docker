import {TChartData} from '@/api/telegramChart/types';

export type TChartState = {
  result: TChartData;
  errors?: string;
};
