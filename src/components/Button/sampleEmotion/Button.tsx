import React, {FC} from 'react';
import {useStyles} from './styles';
import {TButton} from './types';

export const Button: FC<TButton> = ({
  children,
  onClick,
  variant = 'primary',
}) => {
  const styles = useStyles({variant});
  return (
    <button css={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
