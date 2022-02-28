import React, { Children, FC } from 'react';
import cx from 'classnames';

import './Container.scss';

type ContainerProps = {
  fluid?: boolean;
  className?: string;
  fullHeight?: boolean;
};

const Container:FC<ContainerProps> = ({ fluid, children, fullHeight, className }) => {
  const classNames = cx('container', className, {
    'container--fluid': fluid,
    'container--full-height': fullHeight,
  });
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Container;
