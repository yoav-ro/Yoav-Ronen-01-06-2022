import axios from "axios";

const BASE_URL = "http://dataservice.accuweather.com/";
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = process.env.REACT_APP_API_KEY_ALT;

export async function getCityData(cityName) {
    const locationKeyReq = `${BASE_URL}/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`;
    const response = await axios.get(locationKeyReq);
    if (response.data.length === 0) {
        return { error: "City not found" };
    }
    const bestMatch = response.data[0];
    const cityData = {
        cityName: bestMatch.EnglishName,
        key: bestMatch.Key,
        country: bestMatch.Country.EnglishName,
    }
    return cityData;
}

export async function getCityDataAutoComplete(input) {
    const requestStr = `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${input}`;
    const response = await axios.get(requestStr);

    return response.data;
}

export async function getCityWeatherByKey(cityKey, isMetric) {
    const requestStr = `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=${isMetric}`;
    const response = await axios.get(requestStr);
    return response.data;
}

export async function getCurrentWeatherByKey(cityKey) {
    const requestStr = `${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
    const response = await axios.get(requestStr);
    if (response.data["Code"] === 400) {
        return { error: "City not found" };
    }
    return response.data[0];
}

export async function getCityWeather(cityName) {
    const cityData = await getCityData(cityName);
    if (cityData.error) {
        return { error: cityData.error };
    }
    const cityKey = cityData.key;
    const requestStr = `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`;
    const response = await axios.get(requestStr);
    return response.data;
}

export async function getCurrentLocationCity(lat, long) {
    const requestStr = `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}%2C${long}&toplevel=true`;
    const response = await axios.get(requestStr);
    if (response.data["Code"] === 400) {
        return { error: "Invalid coordinates" };
    }
    const cityData = {
        cityName: response.data.EnglishName,
        key: response.data.Key,
        country: response.data.Country.EnglishName,
    }
    return cityData;
}