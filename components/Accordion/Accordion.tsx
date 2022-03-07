import { FC, useCallback, useState } from 'react';
import cx from 'classnames';
import Arrow from '../Svg/arrow.svg';
import './Accordion.scss';

type AccordionProps = {
  title: string;
  isOpen?: boolean;
};

const Accordion: FC<AccordionProps> = ({ title, children, isOpen = true }) => {
  const [show, setShow] = useState<boolean>(isOpen);
  const toggle = useCallback(() => {
    setShow(!show);
  }, [show]);
  const classNames = cx('accordion', {
    'accordion--open': show,
  });
  return (
    <div className={classNames}>
      <button className="accordion__trigger" onClick={toggle}>
        <span className="accordion__title">{title}</span>
        <span className="accordion__icon">
          <Arrow />
        </span>
      </button>
      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;
