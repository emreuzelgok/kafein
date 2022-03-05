import React, { ChangeEvent, FC, FormEvent, SyntheticEvent } from 'react';
import Card from '../Card';
import Accordion from '../Accordion';
import Checkbox from '../Checkbox';
import games from '../../games.json';
import { TGame } from '../../types';
import { setGenreFilters, setStateFilters } from '../../redux/features/filtersSlice';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectFilters } from '../../redux/features/filtersSlice';
import './Sidebar.scss';

games as TGame[];

const stateFilters = Array.from(new Set(
  games.map(item => item.state).flat()
)).filter(item => item !== null) as string[];

const genreFilters = Array.from(new Set(
  games.map(item => item.genres).flat()
)).filter(item => item !== null) as string[];

type SidebarProps = {};

const Sidebar:FC<SidebarProps> = () => {
  const dispatch = useAppDispatch();
  const { states, genres } = useAppSelector(selectFilters);

  const onChangeStateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name; 
    if (states.includes(value)) {
      dispatch(setStateFilters(states.filter(item => item !== value)));
    } else {
      dispatch(setStateFilters([...states, value]));
    }
  }

  const onChangeGenreFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name; 
    if (genres.includes(value)) {
      dispatch(setGenreFilters(genres.filter(item => item !== value)));
    } else {
      dispatch(setGenreFilters([...genres, value]));
    }
  }

  return (
    <aside className="sidebar">
      <Card>
        <Accordion title="State">
          {stateFilters.map((item) => (
            <Checkbox
              key={`filter-${item}`}
              label={item}
              name={item}
              checked={states.includes(item)}
              onChange={onChangeStateFilter}
            />
          ))}
        </Accordion>
        <Accordion title="Genre Filters">
          {genreFilters.map((item) => (
            <Checkbox
              key={`filter-${item}`}
              label={item}
              name={item}
              checked={genres.includes(item)}
              onChange={onChangeGenreFilter}
            />
          ))}
        </Accordion>
      </Card>
    </aside>
  );
}

export default Sidebar;
