import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentWeatherByKey } from "../../utils/apiRequests";

function FavoriteItem({ favoriteData }) {
    const prefrences = useSelector(state => state.prefReducer);
    const [itemData, setItemData] = useState("");
    const cityName = favoriteData.cityName

    useEffect(() => {
        const currWeather = getCurrentWeatherByKey(favoriteData.key);
        currWeather.then((value) => {
            console.log(value)
            setItemData(value);
        })
    }, [])

    if (itemData === "") {
        return <></>
    }
    const weatherUnit = prefrences.weatherUnit;
    const weatherText = itemData["WeatherText"];
    const currTemp = itemData["Temperature"][weatherUnit]["Value"];
    const unitLetter = weatherUnit === "Metric" ? "C" : "F";
    const iconStr = itemData["WeatherIcon"] < 10 ? "0" + itemData["WeatherIcon"] : itemData["WeatherIcon"];
    const iconImgUrl = `https://developer.accuweather.com/sites/default/files/${iconStr}-s.png`;
    const tempText = " " + currTemp + " " + unitLetter;

    return (
        <ListItem>
            <ListItemIcon>
                <img src={iconImgUrl} />
            </ListItemIcon>
            <ListItemText primary={cityName} secondary={weatherText + tempText} />
        </ListItem>
    )
}

export default FavoriteItem;