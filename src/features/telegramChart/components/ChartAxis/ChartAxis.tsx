import React, {memo, useCallback} from 'react';
import {TChartDataLabel} from '@/utils/types';
import {FONT_SIZE} from '../../constants';
import {useStyles} from './styles';
import {TChartAxis} from './types';

export const ChartAxis = memo(
  ({
    points,
    typeAxis,
    labelPaddingX = 0,
    labelPaddingY = 0,
    labels,
    maxDataX,
  }: TChartAxis) => {
    const styles = useStyles();
    const coordinateY = useCallback(
      (item?: TChartDataLabel) =>
        typeAxis === 'x'
          ? labelPaddingY + FONT_SIZE * 2
          : item && item.coordinate >= FONT_SIZE
          ? item.coordinate - FONT_SIZE
          : 0,
      [typeAxis, labelPaddingY]
    );

    return (
      <g>
        <polyline css={styles.line} points={points} />
        {typeAxis === 'x' &&
          labels.map((item, index) => (
            <text
              key={index}
              x={item.coordinate}
              y={coordinateY()}
              css={styles.label}
            >
              {item.label}
            </text>
          ))}
        {typeAxis === 'y' &&
          labels.map((item, index) => (
            <g key={index}>
              <text x={labelPaddingX} y={coordinateY(item)} css={styles.label}>
                {item.label}
              </text>
              <polyline
                css={styles.line}
                points={`${labelPaddingX},${item.coordinate} ${maxDataX},${item.coordinate}`}
              />
            </g>
          ))}
      </g>
    );
  }
);

ChartAxis.displayName = 'ChartAxis';
