/* eslint-disable react/no-array-index-key */
import { ChangeEvent, FC, useState, KeyboardEvent, useRef } from 'react';
import cx from 'classnames';
import Search from '../Svg/search.svg';
import Close from '../Svg/close.svg';
import { selectGamesNames } from '../../redux/features/gamesSlice';
import { useAppSelector } from '../../redux/hooks';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import './SearchBox.scss';

type SearchBoxItemProps = {
  label?: string;
  selected?: boolean;
  query?: string;
  onClick?: (item: string) => void;
  onFocus?: () => void;
};

const SearchBoxItem: FC<SearchBoxItemProps> = ({
  label = '',
  selected,
  query = '',
  onClick,
  onFocus,
}) => {
  const classNames = cx('search-box__item', {
    'search-box__selected': selected,
  });
  const hlText = label.substring(0, query.length);
  const text = label.substring(query.length, label.length);
  const handleOnClick = (item: string) => {
    if (onClick) onClick(item);
  };
  const handleOnFocus = () => {
    if (onFocus) onFocus();
  };
  return (
    <button className={classNames} onClick={() => handleOnClick(label)} onFocus={handleOnFocus}>
      <span className="search-box__highlight">{hlText}</span>
      {text}
    </button>
  );
};

const SearchBox: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [touched, setTouched] = useState<boolean>(false);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const searchBoxRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const games = useAppSelector(selectGamesNames);
  const filteredGames = games
    .filter((item) => item.toLowerCase().startsWith(query.toLocaleLowerCase()))
    .slice(0, 10);

  useOnClickOutside(searchBoxRef, () => setShowSuggestions(false));

  const onFocus = () => {
    if (!touched) {
      setShowSuggestions(true);
      setTouched(true);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
    setSelectedIndex(-1);
  };

  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && selectedIndex < filteredGames.length - 1) {
      e.preventDefault();
      setSelectedIndex(selectedIndex + 1);
    }

    if (e.key === 'ArrowUp' && selectedIndex !== -1) {
      e.preventDefault();
      setSelectedIndex(selectedIndex - 1);
    }

    if (e.key === 'Enter') {
      if (selectedIndex > -1 && filteredGames[selectedIndex]) {
        setShowSuggestions(false);
        alert(`Go to selected: ${filteredGames[selectedIndex]}`);
      } else {
        setShowSuggestions(false);
        alert(`Search query: ${query}`);
      }
    }

    if (e.key === 'Escape' || e.key === 'Tab') {
      setShowSuggestions(false);
    }
  };

  const clear = () => {
    setQuery('');
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onClickItem = (item: string) => {
    setShowSuggestions(false);
    alert(`Go to clicked: ${item}`);
  };

  return (
    <div className="search-box" ref={searchBoxRef}>
      <div className="search-box__icon">
        <Search />
      </div>
      <input
        ref={inputRef}
        onFocus={onFocus}
        onKeyDown={onKeydown}
        className="search-box__input"
        placeholder="Search Games"
        value={query}
        onChange={onChange}
      />
      {showSuggestions && !!filteredGames.length && (
        <div className="search-box__suggestions">
          {filteredGames.map((item, idx) => (
            <SearchBoxItem
              key={`suggestion-${idx}`}
              label={item}
              selected={selectedIndex === idx}
              query={query}
              onClick={onClickItem}
              onFocus={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      )}
      {(query || showSuggestions) && (
        <div className="search-box__clear" onClick={clear} aria-hidden="true">
          <Close />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
