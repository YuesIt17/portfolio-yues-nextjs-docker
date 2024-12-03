import React, {useMemo} from 'react';
import {TelegramChartLine} from '../../components';
import {TTelegramChartMap} from './types';
import {CHART_DELTA_MAP_Y} from '../../constants';
import {useStyles} from './styles';
import {TChartDataLine} from '@/utils/types';

const getChartData = (data: TChartDataLine[]) =>
  data.map((item) => {
    return {
      ...item,
      points: item.pointsMap,
    };
  });

export const TelegramChartMap = ({
  data,
  maxDataX,
  maxDataY,
  width,
}: TTelegramChartMap) => {
  const styles = useStyles({width});
  const maxDataMapY = useMemo(
    () =>
      maxDataY >= CHART_DELTA_MAP_Y
        ? Math.round(maxDataY / CHART_DELTA_MAP_Y)
        : 0,
    [maxDataY]
  );
  const chartData = useMemo(() => getChartData(data), [data]);

  if (!chartData) return null;
  return (
    <div css={styles.chartMap} data-testid="telegramChartMap">
      <TelegramChartLine
        data={chartData}
        maxDataX={maxDataX}
        maxDataY={maxDataMapY}
      />
    </div>
  );
};
