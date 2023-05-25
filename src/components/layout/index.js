import React from 'react';
import {Header} from './header';

const Layout = ({isLogedIn, children}) => {
  return (
    <main>
      <Header>
        <Header.Logo />
        {isLogedIn && <Header.RightMenu />}
      </Header>
      {children}
    </main>
  );
};

export default Layout;
