import React from 'react';
import {screen} from '@testing-library/react';
import {AuthActions} from './AuthActions';
import {themeTestRender} from '@/utils/tests';

const userName = 'I am User';

jest.mock('@/components/AuthProvider', () => ({
  useAuthContext: () => ({
    userName: userName,
  }),
}));

describe('AuthActions test', () => {
  test('Check shows button logout', () => {
    themeTestRender(<AuthActions />);

    const logoutButton = screen.getByRole('button', {name: /logout/i});
    expect(logoutButton).toBeInTheDocument();
  });

  test('Check shows', () => {
    themeTestRender(<AuthActions />);

    const userNameTag = screen.getByTestId('userName');
    expect(userNameTag).toHaveTextContent(userName);
  });
});
