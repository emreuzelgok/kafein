/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import Image from 'next/image';
import Container from '../Container';
import Button from '../Button';
import Link from '../Link';
import './Header.scss';

const menuItems = ['Games', 'Membership', 'Download', 'Blog', 'Support'];

const Header: FC = () => (
  <header className="header">
    <Container fluid>
      <Container className="header__container">
        <div className="header__logo">
          <Link href="/">
            <Image src="/img/logo.jpg" width={317} height={53} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <nav className="header__nav">
            {menuItems.map((item, idx) => (
              <Link
                key={`menu-item-${idx}`}
                href={idx === 0 ? '/' : '/other-page'}
                title={item}
                primary
                showActiveState
              />
            ))}
            <div className="header__cta">
              <Button primary title="LET'S PLAY" />
            </div>
          </nav>
        </div>
      </Container>
    </Container>
  </header>
);

export default Header;
