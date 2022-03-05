import React, { FC } from 'react';
import Card from '../Card';
import Polygon from '../Svg/polygon.svg';
import './LetterCard.scss';

type LetterCardProps = {
  letter?: string;
};

const LetterCard:FC<LetterCardProps> = ({ children, letter }) => {
  return (
    <Card className="letter-card">
      <div className="letter-card__letter">
        <span>{letter}</span>
        <Polygon />
      </div>
      <div>
        {children}
      </div>
    </Card>
  );
}

export default LetterCard;
