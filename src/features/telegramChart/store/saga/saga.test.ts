import {dataChart} from '@/api/telegramChart';
import {mockChartData} from '@/share/mockDataTest';
import {expectSaga} from 'redux-saga-test-plan';
import {throwError} from 'redux-saga-test-plan/providers';
import {call} from 'redux-saga/effects';
import {getDataChart} from './actions';
import {actions, chartDataReducer, initialState} from '../reducers/chartData';
import {chartSaga, getChartDataSaga} from './sagas';

describe('Test saga of chart data', () => {
  test('Check chartSaga with reducer and init state', () => {
    return expectSaga(chartSaga)
      .withReducer(chartDataReducer)
      .hasFinalState(initialState)
      .run();
  });

  test('Check chartSaga with fetches data', () => {
    return expectSaga(chartSaga)
      .provide([[call(dataChart.get), mockChartData]])
      .put(actions.setAll({result: mockChartData}))
      .dispatch(getDataChart())
      .silentRun();
  });

  test('Check getChartDataSaga with reducer and init state', () => {
    return expectSaga(getChartDataSaga)
      .withReducer(chartDataReducer)
      .provide([[call(dataChart.get), initialState.result]])
      .hasFinalState(initialState)
      .run();
  });

  test('Check getChartDataSaga with reducer and fetches data', () => {
    return expectSaga(getChartDataSaga)
      .withReducer(chartDataReducer)
      .provide([[call(dataChart.get), mockChartData]])
      .hasFinalState({...initialState, result: mockChartData})
      .run();
  });

  test('Check getChartDataSaga with reducer and fetches errors', () => {
    const error = new Error('Some error');

    return expectSaga(getChartDataSaga)
      .withReducer(chartDataReducer)
      .provide([[call(dataChart.get), throwError(error)]])
      .hasFinalState({
        ...initialState,
        errors: 'Error in getChartDataSaga. Some error',
      })
      .run();
  });
});
