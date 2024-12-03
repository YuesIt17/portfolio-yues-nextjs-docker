import React from 'react';
import {useStyles} from './styles';
import {TTelegramChart} from './types';
import {useTelegramChart} from './hook';
import {TelegramChartFooter, TelegramChartLine} from '../../components';
import {TelegramChartMap} from '../TelegramChartMap/TelegramChartMap';
import {PEDDING_CHART_SIZE} from '../../constants';

export const TelegramChart = ({width}: TTelegramChart) => {
  const styles = useStyles({width});
  const {data, maxDataX, maxDataY, labelsX, labelsY, onChangeHadler} =
    useTelegramChart();

  if (!data) return null;
  return (
    <div css={styles.chart} data-testid="telegramChart">
      <TelegramChartLine
        data={data}
        maxDataX={maxDataX}
        maxDataY={maxDataY}
        labelsX={labelsX}
        labelsY={labelsY}
        peddingSize={PEDDING_CHART_SIZE}
      />
      <TelegramChartMap
        data={data}
        maxDataX={maxDataX}
        maxDataY={maxDataY}
        width={width}
      />
      <TelegramChartFooter data={data} onChange={onChangeHadler} />
    </div>
  );
};
