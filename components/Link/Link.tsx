import React, { FC } from 'react';
import Link, { LinkProps as LinkBaseProps } from 'next/link';
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

const AppLink:FC<LinkProps> = ({ primary, secondary, block, href, title, children, showActiveState, ...rest }) => {
  const { asPath } = useRouter();
  const classNames = cx('link', {
    'link--primary': primary,
    'link--secondary': secondary,
    'link--default': !primary && !secondary,
    'link--block': block,
    'link--active': showActiveState && asPath === href,
  });
  return (
    <Link href={href} {...rest}>
      <a className={classNames}>
        {title || children}
      </a>
    </Link>
  );
}

export default AppLink;
