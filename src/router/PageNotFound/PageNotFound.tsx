import {PageDefault} from '@/components';
import {useRouter} from 'next/router';
import React, {useCallback} from 'react';
import {useStyles} from './styles';

export const PageNotFound = () => {
  const styles = useStyles();
  const router = useRouter();

  const onGoToMainPage = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <PageDefault
      title="Error 404"
      buttonText="Go back to main"
      buttonHandler={onGoToMainPage}
    >
      <div css={styles.page}>
        {`The requested page was not found, the page may have been deleted, 
        moved to another location, or an error was made when entering the address.`}
      </div>
    </PageDefault>
  );
};

PageNotFound.requireAuth = true;
