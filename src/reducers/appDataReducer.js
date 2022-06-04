import { appDataReducerActionTypes } from "../utils/constants";
const defaultCity = {
    cityName: "Tel Aviv",
    key: 215854,
    country: "Israel",
}

const initialState = {
    defaultCityData: defaultCity,
    currCityData: defaultCity,
};

//Favorite example:
// {
//     cityName: "Hod HaSharon",
//     key: 12345,
//     county: "Israel";
// }

export default function appDataReducer(state = initialState, action) {
    switch (action.type) {
        case appDataReducerActionTypes.setCurrCityData:
            return {
                defaultCityData: state.defaultCityData,
                currCityData: action.data,
            };
        // case appDataReducerActionTypes.setCurrCityWeather:

        default:
            return state;
    }
}