import React, { FC } from 'react';
import Header from '../Header';
import './Layout.scss';

type LayoutProps = {};

const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
