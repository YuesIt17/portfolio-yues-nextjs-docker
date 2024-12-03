import React from 'react';
import {themeTestRenderer} from '@/utils/tests';
import {TelegramChartMap} from './TelegramChartMap';
import {TChartDataLine} from '@/utils/types';
import {COLOR_CHART_LINE_JOINED} from '@/share/constants';

const dataInput = [
  {
    color: COLOR_CHART_LINE_JOINED,
    name: 'line_one',
    points: '1,0 6,17',
    pointsMap: '1,0 6,3',
    type: 'line',
    isVisible: true,
  },
] as TChartDataLine[];

describe('TelegramChartMap test', () => {
  test('Check render TelegramChartMap component', () => {
    const telegramChartMap = themeTestRenderer(
      <TelegramChartMap
        data={dataInput}
        maxDataX={10}
        maxDataY={10}
        width={500}
      />
    ).toJSON();

    expect(telegramChartMap).toMatchSnapshot();
  });
});
