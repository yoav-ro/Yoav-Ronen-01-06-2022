import { favoritesReducerActionTypes } from "./utils/constants";
const initialState = [];

//Favorite example:
// {
//     cityName: "Hod HaSharon",
//     key: 12345,
//     county: "Israel";
// }

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case favoritesReducerActionTypes.addFavorite:
            return [...state, action.data];
        case favoritesReducerActionTypes.removeFavorite:
            const favoriteIndex = state.findIndex(item => item.key === action.data.key);
            if (favoriteIndex !== -1) {
                return state.slice(favoriteIndex, favoriteIndex + 1);
            }
            else {
                return state;
            }
        default:
            return state;
    }
}