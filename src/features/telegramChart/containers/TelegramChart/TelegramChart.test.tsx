import React from 'react';
import {themeTestRenderer} from '@/utils/tests';
import {TelegramChart} from './TelegramChart';
import {TChartDataLabel} from '@/utils/types';
import {mockChartDataLine} from '@/share/mockDataTest';

jest.mock('./hook.ts', () => ({
  useTelegramChart: jest.fn(() => ({
    data: mockChartDataLine,
    maxDataX: 11,
    maxDataY: 37,
    labelsX: [
      {
        label: 'Nov 17',
        coordinate: 1,
      },
    ] as TChartDataLabel[],
    labelsY: [
      {
        label: '60',
        coordinate: 23,
      },
    ] as TChartDataLabel[],
  })),
}));

describe('TelegramChart test', () => {
  test('Check render TelegramChart component', () => {
    const telegramChart = themeTestRenderer(
      <TelegramChart width={700} />
    ).toJSON();

    expect(telegramChart).toMatchSnapshot();
  });
});
