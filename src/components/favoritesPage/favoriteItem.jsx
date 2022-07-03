import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrCity } from "../../utils/actions";
import { getCurrentWeatherByKey } from "../../utils/apiRequests";

function FavoriteItem({ favoriteData }) {
    const prefrences = useSelector(state => state.prefReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [itemData, setItemData] = useState("");
    const cityName = favoriteData.cityName

    useEffect(() => {
        const currWeather = getCurrentWeatherByKey(favoriteData.key);
        currWeather.then((value) => {
            setItemData(value);
        });
    }, [favoriteData])

    if (itemData === "") {
        return <></>;
    }

    const handleClick = () => {
        dispatch(setCurrCity(favoriteData));
        navigate("/");
    }

    const weatherUnit = prefrences.weatherUnit;
    const weatherText = itemData["WeatherText"];
    const currTemp = itemData["Temperature"][weatherUnit]["Value"];
    const unitLetter = weatherUnit === "Metric" ? "C°" : "F°";
    const iconStr = itemData["WeatherIcon"] < 10 ? "0" + itemData["WeatherIcon"] : itemData["WeatherIcon"];
    const iconImgUrl = `https://developer.accuweather.com/sites/default/files/${iconStr}-s.png`;
    const tempText = " " + currTemp + " " + unitLetter;

    return (
        <ListItemButton onClick={handleClick} divider>
            <ListItemIcon>
                <img src={iconImgUrl} alt="Describing the current weather" />
            </ListItemIcon>
            <ListItemText primary={cityName} secondary={weatherText + tempText} />
        </ListItemButton>
    )
}

export default FavoriteItem;