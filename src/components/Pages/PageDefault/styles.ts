import {css, Theme} from '@emotion/react';

export const useStyles = () => ({
  page: (theme: Theme) =>
    css({
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      rowGap: 10,
      justifyItems: 'center',
      height: '100%',
      backgroundColor: theme.colors.secondary.main,
    }),
  content: css({
    margin: '16px 0',
  }),
});
