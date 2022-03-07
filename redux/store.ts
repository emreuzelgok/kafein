import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './features/gamesSlice';
import filtersReducer from './features/filtersSlice';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    filters: filtersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
