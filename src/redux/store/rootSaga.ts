import {chartSagas} from '@/features/telegramChart';
import {all} from 'redux-saga/effects';

const sagas = [...chartSagas];

export function* rootSaga() {
  yield all(sagas.map((saga) => saga()));
}
