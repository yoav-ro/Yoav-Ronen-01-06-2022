import { Grid } from "@mui/material";
import { Container, Gr } from "@mui/system";
import React from "react";
import DayForecast from "./dayForecast";

function CityDisplay({ weatherData, cityData }) {
    const dailyForeCasts = weatherData["DailyForecasts"];

    return (
        <Grid container spacing={2}>
            <Grid item justifyContent="center" xs={12}>
                <div>city names</div>
            </Grid>
            <Grid item justifyContent="center"  container spacing={5}>
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