import {mockChartData} from '@/share/mockDataTest';
import {TChartState} from '../types';
import {chartDataReducer, initialState, actions} from './chartData';

const {setAll, setError} = actions;

describe('Test saga reducer of chart data', () => {
  test('Check return initial state', () => {
    expect(chartDataReducer(undefined, setAll)).toEqual(initialState);
  });
  test('Check return initial state with some action', () => {
    expect(chartDataReducer(undefined, {type: '@@SOME_ACTION'})).toEqual(
      initialState
    );
  });
  test('Check return state with data', () => {
    const outputData = {
      ...initialState,
      result: mockChartData,
    } as TChartState;

    expect(
      chartDataReducer(initialState, setAll({result: mockChartData}))
    ).toEqual(outputData);
  });
  test('Check return state with error', () => {
    const error = 'Some error';
    const outputData = {
      ...initialState,
      errors: error,
    } as TChartState;

    expect(chartDataReducer(initialState, setError({errors: error}))).toEqual(
      outputData
    );
  });
});
