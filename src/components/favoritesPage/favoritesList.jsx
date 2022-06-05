import { List, Paper, Typography, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FavoriteItem from "./favoriteItem";

function FavoritesList() {
    const favorites = useSelector(state => state.favoritesReducer);

    if (favorites.length === 0) {
        return (
            <Box textAlign="center">
                <Typography variant="h4">Favorite Cities</Typography>
                <Paper elevation={5} sx={{
                    width: 300,
                    height: 300,
                    mt: "20px",
                    overflow: "auto",
                }}>
                    <Typography variant="h6">No favorites saved</Typography>
                </Paper>
            </Box>
        )
    }

    return (
        <Box textAlign="center">
            <Typography variant="h4">Favorite Cities</Typography>
            <Paper elevation={5} sx={{
                width: 300,
                height: 300,
                mt: "20px",
                overflow: "auto",
            }}>
                <List>
                    {favorites.map((item, key) => {
                        return (
                            <FavoriteItem favoriteData={item} key={key} />
                        )
                    })}
                </List>
            </Paper>
        </Box>
    )
}

export default FavoritesList;