import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon, IconButton, Tooltip } from "@mui/material";
import { addFavorite, removeFavorite } from "../../../utils/actions";

function FavoriteButton({ cityData }) {
    const favorites = useSelector(state => state.favoritesReducer);
    const isFavorite = favorites.find(city => city.key === cityData.key);
    const dispatch = useDispatch();

    const enlargeCss = {
        transform: "scale(1.8)",
    }

    const handleAddClick = () => {
        dispatch(addFavorite(cityData));
    }

    const handleRemoveClick = () => {
        dispatch(removeFavorite(cityData.key));
        console.log(favorites)
    }

    if (isFavorite) {
        return (
            <Tooltip title="Remove from favorites">
                <IconButton size="large" onClick={handleRemoveClick}>
                    <FavoriteIcon color="primary" style={enlargeCss} />
                </IconButton>
            </Tooltip>
        )
    }

    return (
        <Tooltip title="Add to favorites">
            <IconButton size="large" onClick={handleAddClick}>
                <FavoriteBorderIcon color="primary" style={enlargeCss} />
            </IconButton>
        </Tooltip>
    )
}

export default FavoriteButton;