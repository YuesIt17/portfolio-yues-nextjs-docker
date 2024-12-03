import {Button, useAuthContext} from '@/components';
import React, {FC, memo} from 'react';

export const AuthActions: FC = memo(() => {
  const {userName, logout} = useAuthContext();

  return (
    <>
      <h3 data-testid="userName">{userName}</h3>
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>
    </>
  );
});

AuthActions.displayName = 'AuthActions';
