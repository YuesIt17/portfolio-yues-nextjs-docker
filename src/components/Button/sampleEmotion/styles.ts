import {css, Theme} from '@emotion/react';
import {TButton} from './types';

export const useStyles = ({variant}: Pick<TButton, 'variant'>) => ({
  button: (theme: Theme) => {
    const colors = theme.colors;
    return css({
      backgroundColor:
        variant === 'primary' ? colors.primary.main : colors?.secondary.light,
      color:
        variant === 'primary' ? colors.secondary.light : colors?.primary.main,
      border: `1px solid ${colors.primary.main}`,
      borderRadius: 4,
      padding: '4px 12px',
      fontSize: 14,
      minWidth: 64,
      textTransform: 'uppercase',
      cursor: 'pointer',
      lineHeight: 1.75,
      '&:hover': {
        backgroundColor:
          variant === 'primary' ? colors.primary.dark : colors.secondary.main,
      },
    });
  },
});
