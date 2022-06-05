import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import { useNavigate } from "react-router-dom";
import SettingsMenu from "./settingsMenu";

function Navbar({ setDarkMode }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

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
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                        Weather
                    </Typography>
                    <Button onClick={handleHomeClick} variant="primary">Home</Button>
                    <Button onClick={handleFavoritesClick} variant="primary">Favorites</Button>
                    <IconButton onClick={handleMenu}>
                        <SettingsIcon />
                    </IconButton>
                    <SettingsMenu anchorEl={anchorEl} onClose={handleClose} setDarkMode={setDarkMode} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;