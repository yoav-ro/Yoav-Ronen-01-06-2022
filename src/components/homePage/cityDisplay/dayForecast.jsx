import { Paper, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function DayForecast({ dayForecastData }) {
    const date = new Date(dayForecastData["Date"]);
    const dateStr = `${date.getUTCDate()}/${date.getUTCMonth()}`;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[date.getDay()]

    const minTemp = dayForecastData["Temperature"]["Minimum"]["Value"];
    const maxTemp = dayForecastData["Temperature"]["Maximum"]["Value"];

    const dayWeather = dayForecastData["Day"];
    const dayIconStr = dayWeather["Icon"] < 10 ? "0" + dayWeather["Icon"] : dayWeather["Icon"];
    const dayIconPhrase = dayForecastData["Day"]["IconPhrase"];
    const dayImgUrl = `https://developer.accuweather.com/sites/default/files/${dayIconStr}-s.png`;

    const nightWeather = dayForecastData["Night"];
    const nightIconStr = nightWeather["Icon"] < 10 ? "0" + nightWeather["Icon"] : nightWeather["Icon"];
    const nightIconPhrase = dayForecastData["Night"]["IconPhrase"];
    const nightImgUrl = `https://developer.accuweather.com/sites/default/files/${nightIconStr}-s.png`;

    return (
        <Paper elevation={4} sx={{
            height: 175,
            width: 300,
        }}>
            <Grid container>
                <Grid item container justifyContent="center">
                    <Typography variant="h6">{dayName + " " + dateStr}</Typography>
                </Grid>
                <Grid item container justifyContent="center">
                    {minTemp} - {maxTemp} C
                </Grid>
                <Grid item container justifyContent="center" spacing={4}>
                    <Grid item>
                        <Paper sx={{ backgroundColor: "skyblue", mt: "5px", padding: "3px" }}>
                            <Grid item container justifyContent="center">Day</Grid>
                            <Grid item container justifyContent="center">
                                {dayIconPhrase}
                            </Grid>
                            <Grid item container justifyContent="center">
                                <img src={dayImgUrl} />
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper sx={{ backgroundColor: "#38285c", mt: "5px", padding: "3px", color: "white" }}>
                            <Grid item container justifyContent="center">Night</Grid>
                            <Grid item container justifyContent="center">
                                {nightIconPhrase}
                            </Grid>
                            <Grid item container justifyContent="center">
                                <img src={nightImgUrl} />
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DayForecast;
// example:
// {
//     "Date": "2022-05-31T07:00:00+03:00",
//     "EpochDate": 1653969600,
//     "Temperature": {
//       "Minimum": {
//         "Value": 21.2,
//         "Unit": "C",
//         "UnitType": 17
//       },
//       "Maximum": {
//         "Value": 30.8,
//         "Unit": "C",
//         "UnitType": 17
//       }
//     },
//     "Day": {
//       "Icon": 1,
//       "IconPhrase": "Sunny",
//       "HasPrecipitation": false
//     },
//     "Night": {
//       "Icon": 34,
//       "IconPhrase": "Mostly clear",
//       "HasPrecipitation": false
//     },
//     "Sources": [
//       "AccuWeather"
//     ],
//     "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
//     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
//   }