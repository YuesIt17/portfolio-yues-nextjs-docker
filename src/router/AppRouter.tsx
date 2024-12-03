import React from 'react';
import {ProtectedRoute} from '@/router/ProtectedRoute';
import {AuthActions} from '@/features/auth';
import {AppProps} from 'next/app';
import {Layout} from '@/components/Layout';
import {NextAppProps} from './types';

export const AppRouter = ({
  props,
}: {
  props: Pick<AppProps, 'Component' | 'pageProps'>;
}) => {
  const {Component, pageProps}: NextAppProps = props;

  return Component.requireAuth ? (
    <ProtectedRoute>
      <Layout actions={<AuthActions />}>
        <Component {...pageProps} />
      </Layout>
    </ProtectedRoute>
  ) : (
    <Component {...pageProps} />
  );
};
