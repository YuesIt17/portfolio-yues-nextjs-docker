import React from 'react';
import {css, Global, Theme, ThemeProvider} from '@emotion/react';
import {Provider} from 'react-redux';
import {store} from '../redux/initStore';
import {AppProps} from 'next/app';
import {AppRouter} from '@/router';
import {AuthProvider} from '@/components/AuthProvider';

const defaultColor = '#ffffff';

export const theme: Theme = {
  name: 'main',
  colors: {
    primary: {
      light: '#e3f2fd',
      main: '#1976d2',
      dark: '#1565c0',
    },
    secondary: {
      light: defaultColor,
      main: '#fafafa',
      dark: '#bdbdbd',
    },
    font: {
      dark: '#424242',
    },
  },
  paper: {
    backgroundColor: defaultColor,
  },
};

const globalStyle = css({
  body: {
    margin: 0,
  },
});

export const App = (props: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <div css={(theme: Theme) => theme.paper} suppressHydrationWarning>
        <AuthProvider>
          <AppRouter props={props} />
        </AuthProvider>
      </div>
    </ThemeProvider>
  </Provider>
);
