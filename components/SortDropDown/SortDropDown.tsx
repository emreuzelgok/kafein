import { FC, useState } from 'react';
import DropDown from '../DropDown';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { sortByAsc, sortByDesc, selectGames } from '../../redux/features/gamesSlice';
import './SortDropDown.scss';

const SortDropDown: FC = () => {
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector(selectGames);
  const [selected, setSelected] = useState<string>('Title A-Z');
  const sortByAscAction = () => {
    if (sortBy === 'desc') {
      dispatch(sortByAsc());
      setSelected('Title A-Z');
    }
  };
  const sortByDescAction = () => {
    if (sortBy === 'asc') {
      dispatch(sortByDesc());
      setSelected('Title Z-A');
    }
  };
  return (
    <DropDown primary label={selected}>
      <button className="sort-drop-down__item" onClick={sortByAscAction}>
        Title A-Z
      </button>
      <button className="sort-drop-down__item" onClick={sortByDescAction}>
        Title Z-A
      </button>
    </DropDown>
  );
};

export default SortDropDown;
