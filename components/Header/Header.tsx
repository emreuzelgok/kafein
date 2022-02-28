import React, { FC } from 'react';
import Container from '../Container';
import Button from '../Button';
import Link from '../Link';
import Image from 'next/image';
import './Header.scss';

type HeaderProps = {};

const menuItems = [
  'Games',
  'Membership',
  'Download',
  'Blog',
  'Support'
];

const Header:FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <Container fluid>
        <Container className="header__container">
          <div className="header__logo">
            <Image src="/img/logo.jpg" width={317} height={53} alt="logo" />
          </div>
          <div className="header__menu">
            <nav className="header__nav">
              {menuItems.map((item, index) => (
                <Link
                  key={`menu-item-${index}`}
                  href={index === 0 ? '/' : '/other-page'} title={item}
                  primary
                  showActiveState
                />
              ))}
              <div className="header__cta">
                <Button primary title="LET'S PLAY"/>
              </div>
            </nav>
          </div>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
