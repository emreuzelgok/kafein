import { FC } from 'react';
import Container from '../Container';
import Link from '../Link';
import SocialLink from '../SocialLink';
import DropDown from '../DropDown';
import './Footer.scss';

const Footer: FC = () => (
  <footer className="footer">
    <div className="footer__top">
      <Container className="footer__container">
        <div className="footer__left">
          <div className="footer__column">
            <Link href="/" title="Games" block />
            <Link href="/" title="Membership" block />
            <Link href="/" title="Download" block />
          </div>
          <div className="footer__column">
            <Link href="/" title="Contact Us" block />
            <Link href="/" title="Blog" block />
          </div>
          <div className="footer__column">
            <Link href="/" title="FAQs" block />
            <Link href="/" title="Service Status" block />
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__column">
            <h4 className="footer__title">Follow Us!</h4>
            <SocialLink />
            <SocialLink type="twitter" />
            <SocialLink type="instagram" />
            <SocialLink type="youtube" />
          </div>
          <div className="footer__column">
            <h4 className="footer__title">Site Language</h4>
            <DropDown label="English" directionTop>
              <div>Turkish</div>
              <div>English</div>
            </DropDown>
          </div>
        </div>
      </Container>
    </div>
    <div className="footer__bottom">
      <Container className="footer__container">
        <div className="footer__left">
          <Link href="/" title="Terms of Use" secondary />
          <Link href="/" title="Privacy Policy" secondary />
          <Link href="/" title="Cookies" secondary />
        </div>
        <div className="footer__copyright">Tüm hakları saklıdır.</div>
      </Container>
    </div>
  </footer>
);

export default Footer;
