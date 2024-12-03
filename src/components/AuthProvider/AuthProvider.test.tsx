import React from 'react';
import {render, screen} from '@testing-library/react';
import {AuthProvider, useAuthContext} from './AuthProvider';
import {act, renderHook} from '@testing-library/react-hooks';
import {authWrapper} from '@/utils/tests';

describe('AuthProvider test', () => {
  test('Check shows default value', () => {
    render(<AuthProvider>Test provider</AuthProvider>);

    const content = screen.getByText('Test provider');
    expect(content).toHaveTextContent('Test provider');
  });

  test('Should use AuthContext', () => {
    const {result} = renderHook(() => useAuthContext(), {wrapper: authWrapper});
    const contextValue = {
      userName: 'I am User',
      isUserAuthorization: true,
    };

    act(() => {
      result.current.login && result.current.login(contextValue.userName);
    });

    expect(result.current.userName).toBe(contextValue.userName);
    expect(result.current.isUserAuthorization).toBe(
      contextValue.isUserAuthorization
    );

    act(() => {
      result.current.logout && result.current.logout();
    });

    expect(result.current.userName).toBe('');
    expect(result.current.isUserAuthorization).toBe(
      !contextValue.isUserAuthorization
    );
  });
});
