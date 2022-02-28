import React, { FC } from 'react';
import Header from '../Header';
import Container from '../Container';
import Footer from '../Footer';
import './Layout.scss';


type LayoutProps = {};

const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
