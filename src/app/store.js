import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favoritesReducer';
import prefReducer from '../reducers/prefReducer';

export const store = configureStore({
  reducer: {
    favoritesReducer,
    prefReducer,
  } 
});
