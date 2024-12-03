import {combineReducers} from '@reduxjs/toolkit';
import {CHART_DATA_REDUCER, CHART_LINE_REDUCER} from '../../constants';
import {chartDataReducer} from './chartData';
import {chartLineReducer} from './chartLine';

export {setAll, updateOne} from './chartLine';

export const chartModuleReducer = combineReducers({
  [CHART_DATA_REDUCER]: chartDataReducer,
  [CHART_LINE_REDUCER]: chartLineReducer,
});
