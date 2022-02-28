import React, { FC } from 'react';
import cx from 'classnames';

import './Button.scss';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  width?: number;
  title?: string;
  primary?: boolean;
};

const Button:FC<ButtonProps> = ({ title, children, primary, className, ...props }) => {
  const classNames = cx('button', className, {
    'button--primary': primary
  });
  return (
    <button className={classNames} {...props}>
      {title ||children}
    </button>
  );
}

export default Button;
