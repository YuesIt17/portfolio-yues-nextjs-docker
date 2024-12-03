import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {filter, isArray, sortBy} from 'lodash';
import {TChartDataLine} from '@/utils/types';
import {CHART_LINE_REDUCER, MODULE_NAME} from '../../constants';

const initialState: TChartDataLine[] = [];

const chartLineSlice = createSlice({
  name: `${MODULE_NAME}.${CHART_LINE_REDUCER}`,
  initialState,
  reducers: {
    setAll: (
      state,
      action: PayloadAction<TChartDataLine[] | TChartDataLine>
    ) => {
      const {payload} = action;
      return isArray(payload) ? [...payload] : state;
    },
    updateOne: (
      state,
      action: PayloadAction<TChartDataLine[] | TChartDataLine>
    ) => {
      const {payload} = action;
      if (!isArray(payload) && payload?.name) {
        const lines = filter(state, (item) => item.name !== payload.name);
        const newState = [...lines, payload] as TChartDataLine[];
        return sortBy(newState, [(item) => item?.name]);
      }
    },
  },
});

export const {setAll, updateOne} = chartLineSlice.actions;

export const chartLineReducer = chartLineSlice.reducer;
