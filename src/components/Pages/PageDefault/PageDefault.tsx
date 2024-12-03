import React, {FC} from 'react';
import {TPageDefault} from './types';
import {useStyles} from './styles';
import {Button} from '@/components';

export const PageDefault: FC<TPageDefault> = ({
  children,
  title = '',
  buttonText,
  buttonHandler,
  style,
}) => {
  const styles = useStyles();

  return (
    <div
      css={(theme) => [styles.page(theme), style]}
      data-testid={title.toLowerCase()}
    >
      <h3>{title}</h3>
      <div css={styles.content}>{children}</div>
      {buttonText && buttonHandler && (
        <Button variant="primary" onClick={buttonHandler}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};
