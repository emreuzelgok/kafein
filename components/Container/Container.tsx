import React, { Children, FC } from 'react';
import cx from 'classnames';

import './Container.scss';

type ContainerProps = {
  fluid?: boolean;
  flex?: boolean;
  className?: string;
  fullHeight?: boolean;
};

const Container:FC<ContainerProps> = ({ fluid, children, fullHeight, className, flex }) => {
  const classNames = cx('container', className, {
    'container--fluid': fluid,
    'container--flex': flex,
    'container--full-height': fullHeight,
  });
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Container;
