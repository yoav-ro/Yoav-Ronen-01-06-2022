import { prefReducerActionTypes, favoritesReducerActionTypes } from "./constants";

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

export function setCurrCity(cityData){
    return {
        type: prefReducerActionTypes.setCurrCityData,
        data: cityData,
        description: "Sets the current city data",
    }
}

export function setDefaultCity(cityData){
    return {
        type: prefReducerActionTypes.setDefaultCity,
        data: cityData,
        description: "Sets the defualt city data",
    }
}

