import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCityWeatherByKey, getCurrentWeatherByKey } from "../../utils/apiRequests";
import ControlBar from "./controlBar";
import CityDisplay from "./cityDisplay/cityDisplay";

function HomePage({ }) {
    const prefrences = useSelector(state => state.prefReducer);
    const isMetric = prefrences.weatherUnit === "Metric";
    const currCity = prefrences.currCityData;
    const [currWeatherDisplay, setCurrWeatherDisplay] = useState("");

    useEffect(() => {
        if (currCity) {
            console.log("finding new city weather")
            const newForecast = getCityWeatherByKey(currCity.key, isMetric);
            const newCurrentWeather = getCurrentWeatherByKey(currCity.key);
            Promise.all([newForecast, newCurrentWeather]).then((values) => {
                setCurrWeatherDisplay({
                    forecast: values[0],
                    currWeather: values[1],
                });
            });
        }
    }, [currCity])

    return (
        <Box sx={{ mt: "20px", justifyItems: "center" }}>
            <ControlBar />
            <CityDisplay weatherData={currWeatherDisplay} cityData={currCity} />
        </Box>
    )
}

export default HomePage;