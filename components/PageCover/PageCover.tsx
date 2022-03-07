import { FC } from 'react';
import cx from 'classnames';
import Container from '../Container';
import './PageCover.scss';

type PageCoverProps = {
  title?: string;
  description?: string;
};

const PageCover: FC<PageCoverProps> = ({ children, title, description }) => {
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
};

export default PageCover;
