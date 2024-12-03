import React from 'react';
import {themeTestRenderer} from '@/utils/tests';
import {ChartLine} from './ChartLine';

describe('ChartLine test', () => {
  test('Check render ChartLine component', () => {
    const chartAxisX = themeTestRenderer(
      <ChartLine points="1,1 2,2" />
    ).toJSON();

    expect(chartAxisX).toMatchSnapshot();
  });
});
