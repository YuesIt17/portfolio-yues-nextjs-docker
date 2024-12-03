import {TChartDataLine} from '@/utils/types';

export type TTelegramChartFooter = {
  data: TChartDataLine[] | undefined;
  onChange: (line: TChartDataLine, isVisible: boolean) => void;
};
