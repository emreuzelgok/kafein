import React, { FC } from 'react';
import LinkBase, { LinkProps as LinkBaseProps } from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import './Link.scss';

type LinkProps = LinkBaseProps & {
  primary?: boolean;
  secondary?: boolean;
  block?: boolean;
  title?: string;
  showActiveState?: boolean;
};

const Link:FC<LinkProps> = ({ primary, secondary, block, href, title, children, showActiveState, ...rest }) => {
  const { asPath } = useRouter();
  const classNames = cx('link', {
    'link--primary': primary,
    'link--secondary': secondary,
    'link--default': !primary && !secondary,
    'link--block': block,
    'link--active': showActiveState && asPath === href,
  });
  return (
    <LinkBase href={href} {...rest}>
      <a className={classNames}>
        {title || children}
      </a>
    </LinkBase>
  );
}

export default Link;
