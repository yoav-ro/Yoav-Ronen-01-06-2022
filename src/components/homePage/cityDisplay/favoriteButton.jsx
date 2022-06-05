import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Tooltip } from "@mui/material";
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