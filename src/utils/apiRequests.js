import axios from "axios";

const BASE_URL = "http://dataservice.accuweather.com/";
const apiKey = process.env.REACT_APP_API_KEY;

export async function getCityData(cityName) {
    const locationKeyReq = `${BASE_URL}/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`;
    const response = await axios.get(locationKeyReq);
    const bestMatch = response.data[0];
    const cityData = {
        name: bestMatch.LocalizedName,
        key: bestMatch.Key,
        country: bestMatch.Country.EnglishName,
    }
    return cityData;
}

export async function getCityWeather(cityName) {
    const cityData = await getCityData(cityName);
    const cityKey = cityData.key;
    const requestStr = `${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`;
    const response= await axios.get(requestStr);

    return response.data;
}