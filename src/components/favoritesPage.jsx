import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FavoritesList from "./favoritesList";

function FavoritesPage({ setCurrCity }) {
    const favorites = useSelector(state => state.favoritesReducer);

    return (
        <Grid container>
            <Grid item>
                <FavoritesList />
            </Grid>
        </Grid>
    )
}

export default FavoritesPage;