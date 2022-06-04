import { Grid } from "@mui/material";
import { Container, Gr } from "@mui/system";
import React from "react";
import DayForecast from "./dayForecast";
import FavoriteButton from "./favoriteButton";
import CityHeader from "./cityHeader";

function CityDisplay({ weatherData, cityData }) {
    const dailyForeCasts = weatherData["DailyForecasts"];

    return (
        <Grid container spacing={2} >
            <Grid item container justifyContent="center">
                <CityHeader cityData={cityData} />
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