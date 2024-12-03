import React from 'react';
import {useStyles} from './styles';
import {TInput} from './types';

export const Input = ({onChange, placeholder}: TInput) => {
  const styles = useStyles();
  return (
    <input
      css={styles.input}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
};
