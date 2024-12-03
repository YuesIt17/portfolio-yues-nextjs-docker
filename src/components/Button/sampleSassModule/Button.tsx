import React, {FC} from 'react';
import style from './Button.module.sass';

export const Button: FC<{onClick: () => void}> = ({children, onClick}) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
