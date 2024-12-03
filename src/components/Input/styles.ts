import {css, Theme} from '@emotion/react';

export const useStyles = () => ({
  input: (theme: Theme) =>
    css({
      border: `1px solid ${theme.colors.secondary.dark}`,
      borderRadius: 4,
      padding: '14px 12px',
      outline: 0,
    }),
});
