import { Grid } from "@mui/material";
import React from "react";
import FavoritesList from "./favoritesList";

function FavoritesPage({ }) {

    return (
        <Grid container>
            <Grid item>
                <FavoritesList />
            </Grid>
        </Grid>
    )
}

export default FavoritesPage;