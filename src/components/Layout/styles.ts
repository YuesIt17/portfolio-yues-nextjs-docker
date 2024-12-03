import {css, Theme} from '@emotion/react';

export const useStyles = () => ({
  header: (theme: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'flex-end',
      borderBottom: `1px solid ${theme.colors.secondary.dark}`,
      height: 64,
    }),
  actions: (theme: Theme) =>
    css({
      display: 'flex',
      alignItems: 'center',
      padding: '0 26px',
      columnGap: 26,
      color: theme.colors.primary.main,
    }),
  main: css({
    height: 'calc(100vh - 65px)',
  }),
});
