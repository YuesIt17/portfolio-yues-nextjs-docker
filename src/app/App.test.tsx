import React from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';
import {AppProps} from 'next/app';

const clientRouterMock = jest.createMockFromModule('next/router');

describe('App test', () => {
  test('Check render App component', () => {
    const componentAuth = () => <div>App component</div>;
    const appProps = {
      Component: componentAuth,
      pageProps: {},
      router: clientRouterMock,
    } as AppProps;

    render(<App {...appProps} />);

    const component = screen.getByText('App component');
    expect(component).toBeInTheDocument();
  });
});
