import React, { FC, useCallback, useRef, useState } from 'react';
import cx from 'classnames';
import Arrow from '../Svg/arrow.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import './DropDown.scss';

type DropDownProps = {
  label?: string;
  primary?: boolean;
  directionTop?: boolean; 
};

const DropDown:FC<DropDownProps> = ({ label, children, primary, directionTop }) => {
  const [show, setShow] = useState<boolean>(false);
  const containerRef = useRef(null);
  useOnClickOutside(containerRef, () => setShow(false));
  const classNames = cx('drop-down', {
    'drop-down--open': show,
    'drop-down--primary': primary,
    'drop-down--top': directionTop,
  });

  const toggle = useCallback(() => {
    setShow(!show);
  }, [show]);

  const onClickContent = () => {
    setShow(false);
  };

  return (
    <div className={classNames} ref={containerRef}>
      <button
        className="drop-down__button"
        onClick={toggle}
      >
        <span>{label}</span>
        <span className="drop-down__icon"><Arrow /></span>
      </button>
      {show && (
        <div className="drop-down__content" onClick={onClickContent}>
          {children}
        </div>
      )}
    </div>
  );
}

export default DropDown;
