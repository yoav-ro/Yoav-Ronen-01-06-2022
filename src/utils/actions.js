import { favoritesReducerActionTypes } from "./constants";

export function addFavorite(data) {
    return {
        type: favoritesReducerActionTypes.addFavorite,
        data: data,
        description: "Adds a new city to the favorites",
    }
}

export function removeFavorite(favoriteKey) {
    return {
        type: favoritesReducerActionTypes.removeFavorite,
        data: favoriteKey,
        desctiprion: "Remove a city from the favorites list",
    }
}