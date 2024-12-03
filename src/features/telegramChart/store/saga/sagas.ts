import {dataChart} from '@/api/telegramChart';
import {IResponseChart, TChartData} from '@/api/telegramChart/types';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getDataChart} from './actions';
import {actions} from '../reducers/chartData';
import {mockDataChart} from '@/api/telegramChart/mockDataChart';

export function* getChartData() {
  try {
    const result: IResponseChart[] = yield call(dataChart.get);

    return result?.[0].data;
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Error in saga';
    yield put(
      actions.setError({
        errors: `Error in getChartData. ${message}`,
      })
    );
  }
}

export function* getChartDataSaga() {
  try {
    const isMock = process.env.REACT_ENABLE_MOCK === 'true';
    const result: TChartData = isMock ? mockDataChart : yield getChartData();

    yield put(actions.setAll({result}));
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Error in saga';
    yield put(
      actions.setError({
        errors: `Error in getChartDataSaga. ${message}`,
      })
    );
  }
}

export function* chartSaga() {
  yield takeLatest(getDataChart, getChartDataSaga);
}
