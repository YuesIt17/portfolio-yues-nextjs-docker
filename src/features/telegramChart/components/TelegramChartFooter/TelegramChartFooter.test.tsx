import React from 'react';
import {themeTestRender} from '@/utils/tests';
import {TelegramChartFooter} from './TelegramChartFooter';
import {COLOR_CHART_LINE_JOINED} from '@/share/constants';
import {TChartDataLine} from '@/utils/types';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

describe('TelegramChartFooter test', () => {
  test('Check action footer', async () => {
    const user = userEvent.setup();
    const dataOutput: TChartDataLine[] = [];

    const onChangeHadler = jest.fn(
      (line: TChartDataLine, isVisible: boolean) => {
        const dataLine = dataInput.find((item) => item.name === line.name);
        dataLine && dataOutput.push({...dataLine, isVisible});
      }
    );

    themeTestRender(
      <TelegramChartFooter data={dataInput} onChange={onChangeHadler} />
    );

    const checkboxLine = screen.getByTestId('line_one');
    expect(checkboxLine).toBeInTheDocument();

    await user.click(checkboxLine);

    const prepareData = {...dataInput[0], isVisible: false} as TChartDataLine;

    expect(prepareData).toEqual(dataOutput[0]);
  });

  test('Check empty footer', async () => {
    const {container} = themeTestRender(
      <TelegramChartFooter data={undefined} onChange={jest.fn} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
