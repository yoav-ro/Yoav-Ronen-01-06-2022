import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrCity } from "../utils/actions";
import { getCityWeatherByKey } from "../utils/apiRequests";
import ControlBar from "./controlBar";
import CityDisplay from "./MainCityDisplay";
import SearchBar from "./SearchBar";

function HomePage({ }) {
    const appData = useSelector(state => state.appDataReducer);
    const currCity = appData.currCityData;
    const [currWeatherDisplay, setCurrWeatherDisplay] = useState({ Headline: { Text: "placeholder" }, DailyForecasts: [] });
    console.log(currCity)
    useEffect(() => {
        console.log("effect")
        if (currCity.cityName !== "Tel Aviv") {
            if (currCity.cityName === "New York") {
                console.log("new york")
                setCurrWeatherDisplay(newYorkMock);
            }
            else {
                console.log("finding new city weather")
                // const defaultCityWeather = getCityWeatherByKey(currCity.key);
                // defaultCityWeather.then((value) => {
                //     setCurrWeatherDisplay(value);
                // })
            }

        }
        else {
            setCurrWeatherDisplay(mockForecast);
        }

    })

    return (
        <Box sx={{ mt: "20px", justifyItems: "center" }}>
            <ControlBar />
            <CityDisplay weatherData={currWeatherDisplay} cityData={currCity} />
        </Box>
    )
}

export default HomePage;

const mockCityData = {
    cityName: "Tel Aviv",
    key: 215854,
    country: "Israel",
}

const newYorkCityData = {
    cityName: "New York",
    key: 349727,
    country: "United States",
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

const newYorkMock = {
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
            "Date": "2022-06-04T07:00:00-04:00",
            "EpochDate": 1654340400,
            "Temperature": {
                "Minimum": {
                    "Value": 14.8,
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
            "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-05T07:00:00-04:00",
            "EpochDate": 1654426800,
            "Temperature": {
                "Minimum": {
                    "Value": 15.0,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 24.6,
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
            "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-06T07:00:00-04:00",
            "EpochDate": 1654513200,
            "Temperature": {
                "Minimum": {
                    "Value": 15.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 26.1,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
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
            "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-07T07:00:00-04:00",
            "EpochDate": 1654599600,
            "Temperature": {
                "Minimum": {
                    "Value": 18.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 24.4,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2022-06-08T07:00:00-04:00",
            "EpochDate": 1654686000,
            "Temperature": {
                "Minimum": {
                    "Value": 18.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 25.0,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=5&unit=c&lang=en-us"
        }
    ]
}
