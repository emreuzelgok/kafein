import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store';
import games from '../../games.json';
import { TGame } from '../../types';

interface GamesState {
  sortBy: 'asc' | 'desc',
  letters: string[],
  items: TGame[],
}

const letters = Array.from(new Set(
  games.map(item => item.name.toLocaleLowerCase()[0]).sort()
));

games as TGame[];

const initialState: GamesState = {
  sortBy: 'asc',
  letters,
  items: games,
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    sortByDesc: (state) => {
      state.sortBy = 'desc';
      state.letters = state.letters.reverse();
    },
    sortByAsc: (state) => {
      state.sortBy = 'asc';
      state.letters = state.letters.reverse();
    },
  }
});

export const { sortByAsc, sortByDesc } = gamesSlice.actions;

export const selectGames = (state: RootState) => state.games;

export const selectFilteredGames = createSelector(
  selectGames,
  (state: RootState) => state.filters,
  (games, filters) => {
    let items = games.items;

    if (!!filters.states.length) {
      for (let i = 0; i < filters.states.length; i++) {
        const stateFilter= filters.states[i];
        items = items.filter(item => item.state.includes(stateFilter));
      }
    }

    if (!!filters.genres.length) {
      for (let i = 0; i < filters.genres.length; i++) {
        const genreFilter= filters.genres[i];
        items = items.filter(item => item.genres.includes(genreFilter));
      }
    }

    const state = {
      ...games,
      items
    };

    return state;
  }
);

export const selectGamesNames = createSelector(
  selectGames,
  (games) => {
    return [...games.items.map(item => item.name).sort()];
  }
);

export default gamesSlice.reducer
