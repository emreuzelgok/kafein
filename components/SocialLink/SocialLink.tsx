import React, { FC } from 'react';
import Facebook from '../Svg/facebook.svg';
import Instagram from '../Svg/instagram.svg';
import Twitter from '../Svg/twitter.svg';
import Youtube from '../Svg/youtube.svg';
import './SocialLink.scss';

type SocialLinkProps = {
  type?: 'facebook' | 'instagram' | 'twitter' | 'youtube';
  href?: string;
};

const SocialLink:FC<SocialLinkProps> = ({href, type = 'facebook'}) => {
  return (
    <a href={href} className="social-link">
      {type === 'facebook' && <Facebook />}
      {type === 'instagram' && <Instagram />}
      {type === 'twitter' && <Twitter />}
      {type === 'youtube' && <Youtube />}
    </a>
  );
}

export default SocialLink;
