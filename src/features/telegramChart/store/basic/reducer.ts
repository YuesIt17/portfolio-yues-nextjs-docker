import {TChartDataLine} from '@/utils/types';
import {ChartAction} from './actions';

export function reducer(
  state: TChartDataLine[],
  {
    type,
    payload,
  }: {type: ChartAction; payload: TChartDataLine[] | TChartDataLine}
): TChartDataLine[] {
  switch (type) {
    case ChartAction.setAll:
      if (Array.isArray(payload)) {
        return [...payload];
      }
      break;
    case ChartAction.updateOne:
      if (!Array.isArray(payload) && payload?.name) {
        const lines = state.filter((item) => item.name !== payload.name);
        const newState = [...lines, payload];
        return newState.sort((a, b) =>
          (a.name || '') > (b.name || '') ? 1 : -1
        );
      }
      break;
  }
  return state;
}
