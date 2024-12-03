import {useRouter} from 'next/router';
import {useCallback, useEffect, useMemo} from 'react';

export const usePageHello = () => {
  const router = useRouter();
  const visiblePageHello =
    (typeof window !== 'undefined' &&
      localStorage.getItem('visiblePageHello')) ||
    '';

  useEffect(() => {
    if (!visiblePageHello) {
      localStorage.setItem('visiblePageHello', 'true');
    }
  }, [visiblePageHello]);

  const isVisiblePageHello = useMemo(
    () => visiblePageHello === 'true',
    [visiblePageHello]
  );

  const onHidePageHello = useCallback(() => {
    localStorage.setItem('visiblePageHello', 'false');
    router.push('/');
  }, []);

  return {isVisiblePageHello, onHidePageHello};
};
