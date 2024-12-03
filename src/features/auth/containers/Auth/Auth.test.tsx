import React from 'react';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {AppRouter} from '../../../../router';
import {authTestRender} from '@/utils/tests';
import {NextAppProps} from '@/router/types';
import Auth from '@/pages/auth';
import singletonRouter from 'next/router';

jest.mock('next/router', () => require('next-router-mock'));

describe('Auth test', () => {
  test('Check user authorization', async () => {
    const props = {
      Component: Auth,
      pageProps: {},
    } as NextAppProps;

    authTestRender(<AppRouter props={props} />);

    const user = userEvent.setup();

    const authorizationPage = screen.getByTestId('authorization');
    expect(authorizationPage).toBeInTheDocument();

    const loginInput = screen.getByPlaceholderText('User name');
    await userEvent.type(loginInput, 'User name');
    expect(loginInput).toHaveValue('User name');

    const loginButton = screen.getByRole('button', {name: /login/i});
    await user.click(loginButton);

    expect(singletonRouter).toMatchObject({asPath: '/hello'});
  });
});
