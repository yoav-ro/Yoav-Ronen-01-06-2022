import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    }

    const handleFavoritesClick = () => {
        navigate("/favorites");
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <CloudIcon />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 1}}>
                        Weather
                    </Typography>
                    <Button onClick={handleHomeClick} variant="primary">Home</Button>
                    <Button onClick={handleFavoritesClick} variant="primary">Favorites</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;