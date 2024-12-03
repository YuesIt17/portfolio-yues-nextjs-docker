import React from 'react';
import {useStyles} from './styles';
import {TChartLine} from './types';

export const ChartLine = ({
  points,
  fill,
  stroke,
  isVisible = true,
}: TChartLine) => {
  const styles = useStyles({fill, stroke});

  if (!isVisible) return null;
  return <polyline css={styles.line} points={points} />;
};
