import {RootState} from '@/redux/initStore';
import {createSelector} from '@reduxjs/toolkit';
import {MODULE_NAME} from '../constants';

const selectState = (state: RootState) => state[MODULE_NAME];

export const selectChartData = createSelector(
  selectState,
  (data) => data.chartData.result
);

export const selectChartLine = createSelector(
  selectState,
  (data) => data.chartLine
);
