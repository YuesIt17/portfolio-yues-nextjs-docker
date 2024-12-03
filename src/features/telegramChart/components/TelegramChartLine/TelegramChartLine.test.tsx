import React from 'react';
import {themeTestRenderer} from '@/utils/tests';
import {TelegramChartLine} from './TelegramChartLine';
import {COLOR_CHART_LINE_JOINED} from '@/share/constants';
import {TChartDataLabel, TChartDataLine} from '@/utils/types';

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

const labels = [
  {label: '1', coordinate: 10},
  {label: '2', coordinate: 20},
] as TChartDataLabel[];

describe('TelegramChartLine test', () => {
  test('Check render TelegramChartLine component', () => {
    const telegramChartLine = themeTestRenderer(
      <TelegramChartLine
        data={dataInput}
        maxDataX={10}
        maxDataY={10}
        labelsX={labels}
        labelsY={labels}
      />
    ).toJSON();

    expect(telegramChartLine).toMatchSnapshot();
  });
});
