import {MODULE_NAME} from './constants';
import {chartModuleReducer} from './store';
import {chartSaga} from './store/saga/sagas';

export {default} from './layouts';

export const chartReducer = {
  [MODULE_NAME]: chartModuleReducer,
};

export const chartSagas = [chartSaga];
