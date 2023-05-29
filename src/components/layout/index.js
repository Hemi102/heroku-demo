import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({children}) => {
  return (
    <div>
      <Sidebar />
      <main className="body-content has-sidebar">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
