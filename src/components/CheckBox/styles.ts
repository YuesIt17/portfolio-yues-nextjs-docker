import {css, Theme} from '@emotion/react';

export const useStyles = () => ({
  button: (theme: Theme) =>
    css({
      background: 'transparent',
      border: `1px solid ${theme.colors.secondary.dark}`,
      borderRadius: 24,
      alignItems: 'center',
      display: 'flex',
      padding: 6,
    }),
  icon: css({
    width: 16,
    height: 16,
  }),
  label: (theme: Theme) =>
    css({
      padding: '0 8px',
      fontSize: 12,
      color: theme.colors.font.dark,
    }),
});
