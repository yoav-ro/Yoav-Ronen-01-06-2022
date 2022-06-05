import { favoritesReducerActionTypes } from "../utils/constants";
const initialState = [];

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case favoritesReducerActionTypes.addFavorite:
            return [...state, action.data];
        case favoritesReducerActionTypes.removeFavorite:
            const favoriteIndex = state.findIndex(item => item.key === action.data);
            if (favoriteIndex !== -1) {
                return state.slice(favoriteIndex, favoriteIndex);
            }
            else {
                return state;
            }
        default:
            return state;
    }
}