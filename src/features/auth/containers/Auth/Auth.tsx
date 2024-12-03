import {Input, PageDefault} from '@/components';
import React, {FC, memo} from 'react';
import {useAuth} from './hook';
import {useStyles} from './styles';

export const Auth: FC = memo(() => {
  const styles = useStyles();
  const {onLoginHandler, onChangeHandler} = useAuth();

  return (
    <PageDefault
      title="Authorization"
      buttonText="Login"
      buttonHandler={onLoginHandler}
      style={styles.page}
    >
      <Input onChange={onChangeHandler} placeholder="User name" />
    </PageDefault>
  );
});

Auth.displayName = 'Auth';
