import { Grid, Typography, Paper } from "@mui/material";
import React from "react";
import DayForecast from "./dayForecast";
import CityHeader from "./cityHeader";
import { useSelector } from "react-redux";

function CityDisplay({ weatherData, cityData }) {
    const prefrences = useSelector(state => state.prefReducer);
    if (weatherData === "") {
        return <></>;
    }

    const weatherUnit = prefrences.weatherUnit;
    const currWeather = weatherData["currWeather"];
    const dailyForeCasts = weatherData.forecast["DailyForecasts"];
    const weatherText = currWeather["WeatherText"];
    const currTemp = currWeather["Temperature"][weatherUnit]["Value"];
    const unitLetter = weatherUnit === "Metric" ? "C" : "F";
    const iconStr = currWeather["WeatherIcon"] < 10 ? "0" + currWeather["WeatherIcon"] : currWeather["WeatherIcon"];
    const iconImgUrl = `https://developer.accuweather.com/sites/default/files/${iconStr}-s.png`;

    return (
        <Paper sx={{ mt: "40px", padding: "20px" }} elevation={5}>
            <Grid container spacing={2} >
                <Grid item container justifyContent="center">
                    <Grid item>
                        <CityHeader cityData={cityData} />
                    </Grid>
                    <Grid item sx={{ mt: "20px" }}>
                        <Typography variant="h4">
                            {weatherText}- {currTemp + " " + unitLetter}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ mt: "20px" }}>
                        <img src={iconImgUrl} />
                    </Grid>


                </Grid>
                <Grid item justifyContent="center" container spacing={5}>
                    {dailyForeCasts.map((day, key) => {
                        return (
                            <Grid key={key} item>
                                <DayForecast dayForecastData={day} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Paper>

    )
}

export default CityDisplay;