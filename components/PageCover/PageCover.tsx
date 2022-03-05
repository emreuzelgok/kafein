import React, { FC } from 'react';
import Container from '../Container';
import cx from 'classnames';
import './PageCover.scss';

type PageCoverProps = {
  title?: string;
  description?: string; 
};

const PageCover:FC<PageCoverProps> = ({ children, title, description }) => {
  const classNames = cx('page-cover');
  return (
    <div className={classNames}>
      <Container fullHeight>
        <div className="page-cover__content">
          <h1 className="page-cover__title">{title}</h1>
          <p className="page-cover__desc">{description}</p>
          <div className="page-cover__child">{children}</div>
        </div>
      </Container>
    </div>
  );
}

export default PageCover;
