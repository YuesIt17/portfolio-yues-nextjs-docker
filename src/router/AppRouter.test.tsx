import React from 'react';
import {screen} from '@testing-library/react';
import {AppRouter} from './AppRouter';
import {themeTestRender} from '@/utils/tests';
import {NextAppProps} from './types';

jest.mock('@/components/AuthProvider', () => ({
  useAuthContext: () => ({
    isUserAuthorization: true,
  }),
}));

describe('AppRouter test', () => {
  test('Check render AppRouter component', async () => {
    const props = {
      Component: () => <div>Some component</div>,
      pageProps: {},
    } as NextAppProps;

    themeTestRender(<AppRouter props={props} />);

    const component = screen.getByText('Some component');
    expect(component).toBeInTheDocument();
  });

  test('Check render AppRouter component with layout', async () => {
    const componentAuth = () => <div>Some component</div>;
    componentAuth.requireAuth = true;

    const propsLayout = {
      Component: componentAuth,
      pageProps: {},
    } as NextAppProps;

    themeTestRender(<AppRouter props={propsLayout} />);

    const componentLayout = screen.getByTestId('layout');
    expect(componentLayout).toBeInTheDocument();
  });
});
