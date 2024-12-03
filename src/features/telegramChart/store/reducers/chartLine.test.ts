import {COLOR_CHART_LINE_JOINED} from '@/share/constants';
import {mockChartDataLine} from '@/share/mockDataTest';
import {TChartDataLine} from '@/utils/types';
import {chartLineReducer, setAll, updateOne} from './chartLine';

const payload = {
  color: COLOR_CHART_LINE_JOINED,
  name: 'name_2',
  points: '1,0 6,17',
  pointsMap: '1,0 6,3',
  type: 'line',
  isVisible: true,
} as TChartDataLine;

describe('Test reducer of chart line', () => {
  test('Check return initial state', () => {
    const initAction = {type: '@@SOME_ACTION'};
    expect(chartLineReducer(undefined, initAction)).toEqual([]);
  });

  test('Check action setAll with empty payload', () => {
    expect(chartLineReducer(undefined, setAll([]))).toEqual([]);
  });

  test('Check action setAll with data payload', () => {
    expect(chartLineReducer(undefined, setAll([payload]))).toEqual([payload]);
  });

  test('Check action setAll with data payload and state', () => {
    expect(chartLineReducer(mockChartDataLine, setAll([payload]))).toEqual([
      payload,
    ]);
  });

  test('Check action setAll with one object data payload', () => {
    expect(chartLineReducer(undefined, setAll(payload))).toEqual([]);
  });

  test('Check action updateOne with empty payload', () => {
    expect(
      chartLineReducer(undefined, updateOne({} as TChartDataLine))
    ).toEqual([]);
  });

  test('Check action updateOne with data payload and empty state', () => {
    expect(chartLineReducer(undefined, updateOne(payload))).toEqual([payload]);
  });

  test('Check action updateOne with data payload and state', () => {
    expect(chartLineReducer(mockChartDataLine, updateOne(payload))).toEqual([
      ...mockChartDataLine,
      payload,
    ]);
  });

  test('Check action updateOne change data after init state', () => {
    const сhangedPayload = {
      ...mockChartDataLine[0],
      isVisible: true,
    } as TChartDataLine;

    expect(
      chartLineReducer(mockChartDataLine, updateOne(сhangedPayload))
    ).toEqual([сhangedPayload]);
  });

  test('Check action updateOne change data payload and with data state', () => {
    const сhangedPayload = {
      ...payload,
      isVisible: false,
    } as TChartDataLine;

    expect(
      chartLineReducer(mockChartDataLine, updateOne(сhangedPayload))
    ).toEqual([...mockChartDataLine, сhangedPayload]);
  });
});
