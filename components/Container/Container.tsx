import { FC } from 'react';
import cx from 'classnames';
import './Container.scss';

type ContainerProps = {
  fluid?: boolean;
  flex?: boolean;
  className?: string;
  fullHeight?: boolean;
  grow?: boolean;
};

const Container: FC<ContainerProps> = ({ fluid, children, fullHeight, className, flex, grow }) => {
  const classNames = cx('container', className, {
    'container--fluid': fluid,
    'container--flex': flex,
    'container--grow': grow,
    'container--full-height': fullHeight,
  });
  return <div className={classNames}>{children}</div>;
};

export default Container;
