import React, { useState } from "react";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import { getCityData } from "../utils/apiRequests";
import { useDispatch } from "react-redux";
import { setCurrCity } from "../utils/actions";

function SearchBar({ }) {
    const [input, setInput] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const dispatch = useDispatch();

    const handleClick = async () => {
        if (input !== "") {
            if (input === "new york") {
                dispatch(setCurrCity(newYorkCityData))
            }
            else {
                const cityData = await getCityData(input);
                if (cityData.error) {
                    console.log(cityData.error);
                    setErrorMsg(cityData.error);
                    setOpenAlert(true);
                }
                else {
                    dispatch(setCurrCity(cityData))
                }
            }
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    return (
        <Box justifyContent="center" display="flex" >
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openAlert}
                onClose={handleClose}
                autoHideDuration={2000}
            >
                <Alert severity="error" onClose={handleClose}>
                    {errorMsg}
                </Alert>
            </Snackbar>
            <TextField onChange={(e) => setInput(e.target.value)}
                variant="outlined"
                label="Search City"
                size="small"
            />
            <Button onClick={handleClick} variant="contained">
                <SearchIcon />
            </Button>
        </Box >
    )
}

const newYorkCityData = {
    cityName: "New York",
    key: 349727,
    country: "United States",
}

export default SearchBar;