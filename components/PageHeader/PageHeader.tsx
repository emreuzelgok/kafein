import React, { FC } from 'react';
import Container from '../Container';

import './PageHeader.scss';

type PageHeaderProps = {
  title?: string;
};

const PageHeader:FC<PageHeaderProps> = ({title, children}) => {
  return (
    <Container className="page-header">
      <h2 className="page-header__title">{title}</h2>
      <div className="page-header__content">{children}</div>
    </Container>
  );
}

export default PageHeader;
