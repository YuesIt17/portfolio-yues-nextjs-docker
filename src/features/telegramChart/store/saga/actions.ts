import {createAction} from '@reduxjs/toolkit';
import {CHART_DATA_REDUCER, MODULE_NAME} from '../../constants';

export const getDataChart = createAction(
  `${MODULE_NAME}/${CHART_DATA_REDUCER}/GET_DATA`
);
