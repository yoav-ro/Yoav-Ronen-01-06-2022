import { ListItem, ListItemIcon, ListItemText, List } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import React from "react";
import { useSelector } from "react-redux";

function FavoritesList({ setCurrCity }) {
    const favorites = useSelector(state => state.favoritesReducer);

    return (
        <List>
            {favorites.map((item, key) => {
                return (
                    <ListItem key={key}>
                        <ListItemIcon>
                            <CloudIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.cityName} />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default FavoritesList;