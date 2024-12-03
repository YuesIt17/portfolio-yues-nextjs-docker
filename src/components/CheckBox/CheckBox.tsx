import {theme} from '@/app/App';
import React from 'react';
import {CheckCircleIcon} from '../Icons';
import {useCheckBox} from './hook';
import {useStyles} from './styles';
import {TCheckBox} from './types';

export function CheckBox({label, name, value, color, onChange}: TCheckBox) {
  const styles = useStyles();
  const {field, onClickHandler} = useCheckBox({name, value, onChange});
  const defaultColor = color || theme.colors.primary.dark;
  const checkedColor = field.value ? defaultColor : 'transparent';

  return (
    <button css={styles.button} onClick={onClickHandler} data-testid={name}>
      <div css={styles.icon}>
        <CheckCircleIcon fill={checkedColor} stroke={defaultColor} />
      </div>
      <div css={styles.label}>{label}</div>
    </button>
  );
}
