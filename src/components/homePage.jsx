import { Container as Box } from "@mui/system";
import React from "react";
import CityDisplay from "./MainCityDisplay";
import SearchBar from "./SearchBar";

function HomePage({ }) {

    return (
        <Box sx={{mt: "20px", justifyItems: "center"}}>
            <SearchBar />
            <CityDisplay weatherData={mockForecast} cityData={mockCityData} />
        </Box>
    )
}

export default HomePage;

const mockCityData = {
    cityName: "Tel Aviv",
    key: 215854,
    country: "Israel",
}

const mockForecast = {
    "Headline": {
        "EffectiveDate": "2022-05-31T20:00:00+03:00",
        "EffectiveEpochDate": 1654016400,
        "Severity": 7,
        "Text": "Warm Tuesday night",
        "Category": "heat",
        "EndDate": "2022-06-01T08:00:00+03:00",
        "EndEpochDate": 1654059600,
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2022-05-31T07:00:00+03:00",
            "EpochDate": 1653969600,
            "Temperature": {
                "Minimum": {
                    "Value": 21.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 30.8,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-01T07:00:00+03:00",
            "EpochDate": 1654056000,
            "Temperature": {
                "Minimum": {
                    "Value": 20.5,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 26.7,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-02T07:00:00+03:00",
            "EpochDate": 1654142400,
            "Temperature": {
                "Minimum": {
                    "Value": 20,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 26.6,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-03T07:00:00+03:00",
            "EpochDate": 1654228800,
            "Temperature": {
                "Minimum": {
                    "Value": 19.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 27.6,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-04T07:00:00+03:00",
            "EpochDate": 1654315200,
            "Temperature": {
                "Minimum": {
                    "Value": 20.8,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 28,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 33,
                "IconPhrase": "Clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
        }
    ]
}
