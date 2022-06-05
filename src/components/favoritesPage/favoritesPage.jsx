import { Grid } from "@mui/material";
import React from "react";
import FavoritesList from "./favoritesList";

function FavoritesPage() {

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <FavoritesList />
            </Grid>
        </Grid>
    )
}

export default FavoritesPage;