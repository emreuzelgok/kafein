import { FC } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: FC = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
