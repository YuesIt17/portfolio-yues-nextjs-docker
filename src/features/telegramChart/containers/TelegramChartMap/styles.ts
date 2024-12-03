import {css, Theme} from '@emotion/react';
import {TTelegramChartMapStyle} from './types';

export const useStyles = ({width}: TTelegramChartMapStyle) => ({
  chartMap: (theme: Theme) =>
    css({
      width: width,
      height: '100%',
      backgroundColor: theme.colors.secondary.main,
    }),
});
