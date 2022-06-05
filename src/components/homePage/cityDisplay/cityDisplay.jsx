import { Grid, Typography, Paper, Button, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import DayForecast from "./dayForecast";
import CityHeader from "./cityHeader";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultCity } from "../../../utils/actions";

function CityDisplay({ weatherData, cityData }) {
    const [openAlert, setOpenAlert] = useState(false);
    const dispatch = useDispatch();

    const prefrences = useSelector(state => state.prefReducer);
    if (weatherData === "") {
        return <></>;
    }

    const weatherUnit = prefrences.weatherUnit;
    const currWeather = weatherData["currWeather"];
    const dailyForeCasts = weatherData.forecast["DailyForecasts"];
    const weatherText = currWeather["WeatherText"];
    const currTemp = currWeather["Temperature"][weatherUnit]["Value"];
    const unitLetter = weatherUnit === "Metric" ? "C°" : "F°";
    const iconStr = currWeather["WeatherIcon"] < 10 ? "0" + currWeather["WeatherIcon"] : currWeather["WeatherIcon"];
    const iconImgUrl = `https://developer.accuweather.com/sites/default/files/${iconStr}-s.png`;

    const handleClick = () => {
        dispatch(setDefaultCity(cityData));
        setOpenAlert(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

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
                        <img src={iconImgUrl} alt="Describing the current weather" />
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
                <Grid item container justifyContent="center">
                    <Button onClick={handleClick}>Set as default</Button>
                </Grid>
            </Grid>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openAlert}
                onClose={handleClose}
                autoHideDuration={2000}
            >
                <Alert severity="success" onClose={handleClose}>
                    Default city is now {cityData.cityName}
                </Alert>
            </Snackbar>
        </Paper>

    )
}

export default CityDisplay;