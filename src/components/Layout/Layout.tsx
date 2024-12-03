import React, {FC, memo, ReactNode} from 'react';
import {useStyles} from './styles';

export const Layout: FC<{actions: ReactNode}> = memo(({actions, children}) => {
  const styles = useStyles();
  return (
    <div data-testid="layout">
      <header css={styles.header}>
        <div css={styles.actions}>{actions}</div>
      </header>
      <main css={styles.main}>{children}</main>
    </div>
  );
});

Layout.displayName = 'Layout';
