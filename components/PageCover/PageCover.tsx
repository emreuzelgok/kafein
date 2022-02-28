import React, { FC } from 'react';
import Container from '../Container';
import cx from 'classnames';
import './PageCover.scss';

type PageCoverProps = {};

const PageCover:FC<PageCoverProps> = ({ children }) => {
  const classNames = cx('page-cover');
  return (
    <div className={classNames}>
      <Container fullHeight>
        <div className="page-cover__content">
          <h1 className="page-cover__title">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="page-cover__desc">
            With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!
          </p>
          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
}

export default PageCover;
