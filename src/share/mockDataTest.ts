import {
  COLOR_CHART_LINE_JOINED,
  COLOR_CHART_LINE_LEFT,
} from '@/share/constants';
import {TChartData} from '@/api/telegramChart/types';
import {TChartDataLine} from '@/utils/types';

export const mockChartData = {
  columns: [
    ['x', 1542412800000, 1542499200000],
    ['y0', 37, 20],
  ],
  types: {
    y0: 'line',
    x: 'x',
  },
  names: {
    y0: '#0',
  },
  colors: {
    y0: COLOR_CHART_LINE_JOINED,
  },
} as TChartData;

export const mockChartDataLine = [
  {
    color: COLOR_CHART_LINE_LEFT,
    name: 'name_1',
    points: '2,3 5,20',
    pointsMap: '1,0 6,3',
    type: 'line',
    isVisible: false,
  },
] as TChartDataLine[];
