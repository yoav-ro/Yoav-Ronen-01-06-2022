import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../cityReducer';

export const store = configureStore({
  reducer: favoritesReducer 
});
