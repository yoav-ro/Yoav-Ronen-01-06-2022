import { Grid } from "@mui/material";
import { Container, Gr } from "@mui/system";
import React from "react";
import DayForecast from "./dayForecast";

function CityDisplay({ weatherData, cityData }) {
    const dailyForeCasts = weatherData["DailyForecasts"];
    const { cityName, country } = cityData;

    return (
        <Grid container spacing={2}>
            <Grid item container justifyContent="center">
                <div>{cityName} | {country}</div>
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
    )
}

export default CityDisplay;