import {Fetcher} from '..';

import {IResponseChart} from './types';

export const dataChart = {
  get: () => Fetcher.request<IResponseChart[]>({url: 'data_chart'}),
};
