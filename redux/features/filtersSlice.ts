import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface FiltersState {
  states: string[];
  genres: string[];
}

const initialState: FiltersState = {
  states: [],
  genres: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStateFilters: (state, action) => {
      return {
        ...state,
        states: action.payload,
      };
    },
    setGenreFilters: (state, action) => {
      return {
        ...state,
        genres: action.payload,
      };
    },
  },
});

export const { setStateFilters, setGenreFilters } = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer;
