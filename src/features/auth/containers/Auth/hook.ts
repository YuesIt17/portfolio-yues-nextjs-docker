import {useAuthContext} from '@/components/AuthProvider';
import {useRouter} from 'next/router';
import {ChangeEvent, useCallback, useState} from 'react';
import {usePageHello} from '../../../../router';

export const useAuth = () => {
  const router = useRouter();
  const {login} = useAuthContext();
  const [userName, setUserName] = useState<string>('');
  const {isVisiblePageHello} = usePageHello();

  const onLoginHandler = useCallback(() => {
    if (login && userName) {
      login(userName);
      if (isVisiblePageHello) {
        router.push('/hello');
      } else {
        router.push('/');
      }
    }
  }, [login, userName, isVisiblePageHello]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  return {onLoginHandler, onChangeHandler};
};
