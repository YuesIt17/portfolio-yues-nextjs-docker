import React from 'react';
import {render} from '@testing-library/react';
import {ProtectedRoute} from './ProtectedRoute';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn,
  })),
}));

describe('ProtectedRoute test', () => {
  test('Check shows value null', () => {
    const {container} = render(<ProtectedRoute>Some component</ProtectedRoute>);
    expect(container.firstChild).toBeNull();
  });
});
