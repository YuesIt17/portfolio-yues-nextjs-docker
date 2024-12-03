import {mockChartData} from '@/share/mockDataTest';
import {chartDataReducer, fetchDataChart, initialState} from './chartData';

const fulfilledAction = {type: fetchDataChart.fulfilled};

describe('Test reducer of chart data', () => {
  test('Check return initial state', () => {
    expect(chartDataReducer(undefined, fulfilledAction)).toEqual(initialState);
  });
  test('Check return initial state with some action', () => {
    expect(chartDataReducer(undefined, {type: '@@SOME_ACTION'})).toEqual(
      initialState
    );
  });
  test('Check return state with data', () => {
    const action = {
      ...fulfilledAction,
      payload: mockChartData,
    };
    expect(chartDataReducer(initialState, action)).toEqual(mockChartData);
  });
});
