import {css, Theme} from '@emotion/react';
import {TChartLine} from './types';

export const useStyles = ({
  fill,
  stroke,
}: Pick<TChartLine, 'fill' | 'stroke'>) => ({
  line: (theme: Theme) =>
    css({
      fill: fill || 'none',
      stroke: stroke || theme.colors.primary.main,
    }),
});
