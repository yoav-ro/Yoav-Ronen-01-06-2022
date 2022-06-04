import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favoritesReducer';
import appDataReducer from '../reducers/appDataReducer';

export const store = configureStore({
  reducer: {
    favoritesReducer,
    appDataReducer,
  } 
});
