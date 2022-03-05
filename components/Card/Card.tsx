import React, { FC } from 'react';
import cx from 'classnames';
import './Card.scss';

type CardProps = {
  className?: string;
};

const Card:FC<CardProps> = ({children, className}) => {
  const classNames = cx('card', className);
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default Card;
