import React from 'react';
import {themeTestRenderer} from '@/utils/tests';
import {ChartAxis} from './ChartAxis';
import {TChartAxis} from './types';

const axisParams = {
  labels: [
    {label: '1', coordinate: 10},
    {label: '2', coordinate: 20},
  ],
  points: '1,1 2,2',
  labelPaddingX: 10,
  labelPaddingY: 10,
  maxDataX: 10,
} as TChartAxis;

describe('ChartAxis test', () => {
  test('Check render ChartAxis X component', () => {
    const chartAxisX = themeTestRenderer(
      <ChartAxis {...axisParams} typeAxis="x" />
    ).toJSON();

    expect(chartAxisX).toMatchSnapshot();
  });

  test('Check render ChartAxis Y component', () => {
    const chartAxisY = themeTestRenderer(
      <ChartAxis {...axisParams} typeAxis="y" />
    ).toJSON();

    expect(chartAxisY).toMatchSnapshot();
  });
});
