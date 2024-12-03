import {css, Theme} from '@emotion/react';
import {FONT_SIZE} from '../../constants';

export const useStyles = () => ({
  line: (theme: Theme) =>
    css({
      stroke: theme.colors.secondary.dark,
      strokeWidth: 0.5,
    }),
  label: (theme: Theme) =>
    css({
      fontSize: FONT_SIZE,
      fill: theme.colors.secondary.dark,
    }),
});
