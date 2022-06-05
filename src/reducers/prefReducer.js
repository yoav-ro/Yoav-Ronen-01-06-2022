import { prefReducerActionTypes } from "../utils/constants";

const initialState = {
    defaultCityData: "",
    currCityData: "",
    weatherUnit: "Metric",
};

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
        case prefReducerActionTypes.setWeatherUnit:
            return {
                defaultCityData: state.defaultCityData,
                currCityData: state.currCityData,
                weatherUnit: action.data,
            }
        default:
            return state;
    }
}