import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import { getCityData } from "../utils/apiRequests";
import { useDispatch } from "react-redux";
import { setCurrCity } from "../utils/actions";

function SearchBar({ }) {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleClick = async () => {
        if (input !== "") {
            if (input === "new york") {
                console.log("new york");
                dispatch(setCurrCity(newYorkCityData))
            }
            else {
                const cityData = await getCityData(input);
                if (cityData.error) {
                    console.log(cityData.error);
                }
                else {
                    dispatch(setCurrCity(cityData))
                }
            }
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
                <SearchIcon />
            </Button>
        </Box>
    )
}

const newYorkCityData = {
    cityName: "New York",
    key: 349727,
    country: "United States",
}

export default SearchBar;