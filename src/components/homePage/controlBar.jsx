import { Button, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrCity } from "../../utils/actions";
import AutoCompleteSearch from "./cityDisplay/autoCompleteSearch";

function ControlBar({ }) {
    const prefrences = useSelector(state => state.prefReducer);
    const defaultCity = prefrences.defaultCityData;
    const dispatch = useDispatch();

    const handleDefaultClick = () => {
        dispatch(setCurrCity(defaultCity));
    }

    return (
        <Box justifyContent="center" display="flex">
            <Button onClick={handleDefaultClick} variant="contained" sx={{mr: "20px"}}>Default</Button>
            <AutoCompleteSearch />
        </Box>
    )
}

export default ControlBar;