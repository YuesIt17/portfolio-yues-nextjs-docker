import {NextComponentType} from 'next';
import {AppInitialProps} from 'next/app';

type NextApplicationPage = NextComponentType & {
  requireAuth?: boolean;
};

export type NextAppProps = {
  Component: NextApplicationPage;
  pageProps: AppInitialProps['pageProps'];
};
