import {TChartDataLine} from '@/utils/types';
import React, {memo, useContext} from 'react';
import {ClassComponentContext} from '../../pages/TelegramChartPage';
import {ChartLineClass} from '../../sampleClassComponent/components';
import {ChartAxis} from '../ChartAxis';
import {ChartLine} from '../ChartLine';
import {TTelegramChartLine} from './types';

const Line = memo(
  ({
    hasClassComponent,
    line,
  }: {
    hasClassComponent: boolean;
    line: TChartDataLine;
  }) => (
    <>
      {hasClassComponent ? (
        <ChartLineClass
          points={line.points}
          stroke={line.color}
          isVisible={line.isVisible}
        />
      ) : (
        <ChartLine
          points={line.points}
          stroke={line.color}
          isVisible={line.isVisible}
        />
      )}
    </>
  )
);
Line.displayName = 'Line';

export const TelegramChartLine = ({
  data,
  maxDataX,
  maxDataY,
  labelsX,
  labelsY,
  width,
  peddingSize = 0,
}: TTelegramChartLine) => {
  const {hasClassComponent} = useContext(ClassComponentContext);
  if (!data) return null;
  return (
    <svg
      viewBox={`0 0 ${maxDataX + peddingSize} ${maxDataY + peddingSize}`}
      style={{width}}
    >
      {data.map((line) => (
        <Line
          key={line.name}
          hasClassComponent={hasClassComponent}
          line={line}
        />
      ))}
      {labelsX && (
        <ChartAxis
          typeAxis="x"
          labels={labelsX}
          labelPaddingY={maxDataY}
          points={`${0},${maxDataY} ${maxDataX},${maxDataY}`}
        />
      )}
      {labelsY && (
        <ChartAxis
          typeAxis="y"
          labels={labelsY}
          points={`${0},${0} ${0},${maxDataY}`}
          maxDataX={maxDataX}
        />
      )}
    </svg>
  );
};
