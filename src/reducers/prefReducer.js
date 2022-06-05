import { prefReducerActionTypes } from "../utils/constants";
// const defaultCity = {
//     cityName: "Tel Aviv",
//     key: 215854,
//     country: "Israel",
// }

const initialState = {
    defaultCityData: "",
    currCityData: "",
    weatherUnit: "Metric",
};

//Favorite example:
// {
//     cityName: "Hod HaSharon",
//     key: 12345,
//     county: "Israel";
// }

export default function prefReducer(state = initialState, action) {
    switch (action.type) {
        case prefReducerActionTypes.setCurrCityData:
            return {
                defaultCityData: state.defaultCityData,
                currCityData: action.data,
                weatherUnit: state.weatherUnit,
            };
        case prefReducerActionTypes.setDefaultCity:
            return {
                defaultCityData: action.data,
                currCityData: state.currCityData,
                weatherUnit: state.weatherUnit,
            };

        default:
            return state;
    }
}