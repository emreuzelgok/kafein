import React, { Children, FC } from 'react';
import cx from 'classnames';

import './Container.scss';

type ContainerProps = {
  fluid?: boolean;
  className?: string;
};

const Container:FC<ContainerProps> = ({ fluid, children, className }) => {
  const classNames = cx('container', className, {
    'container--fluid': fluid,
  });
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Container;
