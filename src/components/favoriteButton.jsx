import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { useSelector } from "react-redux";
import { Button, Icon, IconButton, Tooltip } from "@mui/material";

function FavoriteButton({ cityKey }) {
    const favorites = useSelector(state => state.favoritesReducer);
    const isFavorite = favorites.find(city => city.key === cityKey);

    const enlargeCss = {
        transform: "scale(1.8)",
    }

    if (isFavorite) {
        return (
            <Tooltip title="Remove from favorites">
                <IconButton>
                    <FavoriteIcon color="primary" />
                </IconButton>
            </Tooltip>
            )
    }

    return (
        <Tooltip title="Add to favorites">
            <IconButton size="large">
                <FavoriteBorderIcon color="primary" style={enlargeCss} />
            </IconButton>
        </Tooltip>
    )
}

export default FavoriteButton;