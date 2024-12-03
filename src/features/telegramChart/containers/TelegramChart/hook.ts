import {useEffect, useMemo} from 'react';

import {TChartDataLine} from '@/utils/types';
import {prepareData} from '@/utils';
import {useTypeDispatch, useTypeSelector} from '@/redux/hooks';
import {setAll, updateOne} from '../../store';
import {getDataChart} from '../../store/saga/actions';
import {selectChartData, selectChartLine} from '../../store/selectors';

export function useTelegramChart() {
  const dispatch = useTypeDispatch();
  const chartData = useTypeSelector(selectChartData);
  const chartLines = useTypeSelector(selectChartLine);

  const {lines, maxDataX, maxDataY, labelsX, labelsY} = useMemo(() => {
    return prepareData(chartData);
  }, [chartData]);

  useEffect(() => {
    dispatch(getDataChart());
  }, []);

  useEffect(() => {
    dispatch(setAll(lines));
  }, [lines]);

  const onChangeHadler = (line: TChartDataLine, isVisible: boolean) => {
    dispatch(updateOne({...line, isVisible: isVisible}));
  };

  return {
    data: chartLines,
    maxDataX,
    maxDataY,
    labelsX,
    labelsY,
    onChangeHadler,
  };
}
