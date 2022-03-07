import { FC } from 'react';
import type { TGame } from '../../types';

import './GameList.scss';

type GameListProps = {
  items: TGame[];
};

const GameList: FC<GameListProps> = ({ items }) => {
  const content = items.map((item) => (
    <li className="gamelist__item" key={`game-${item.id}`}>
      {item.name}
    </li>
  ));
  return <ul className="gamelist">{content}</ul>;
};

export default GameList;
