import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { citySearch, getCityWeather } from "../utils/apiRequests";

function SearchBar() {
    const [input, setInput] = useState("");

    const handleClick = () => {
        if (input !== "") {
            getCityWeather(input);
        }

    }

    return (
        <Box justifyContent="center" display="flex" >
            <TextField onChange={(e) => setInput(e.target.value)} 
            variant="outlined" 
            label="Search City" 
            size="small"
            />
            <Button onClick={handleClick} variant="contained">
                <SearchIcon/>
            </Button>
        </Box>
    )
}

export default SearchBar;