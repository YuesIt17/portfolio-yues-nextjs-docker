import {useAuthContext} from '@/components/AuthProvider';
import {useRouter} from 'next/router';
import React, {FC, useEffect} from 'react';

export const ProtectedRoute: FC = ({children}) => {
  const {isUserAuthorization} = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!isUserAuthorization) {
      router.push('/auth');
    }
  });

  return isUserAuthorization ? <>{children}</> : null;
};
