import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrCity } from "../utils/actions";
import SearchBar from "./SearchBar";

function ControlBar({ }) {
    const prefrences = useSelector(state => state.prefReducer);
    const defaultCity = prefrences.defaultCityData;
    const dispatch = useDispatch();

    const handleDefaultClick = () => {
        dispatch(setCurrCity(defaultCity));
    }

    return (
        <Grid container>
            <Grid item xs={2}>
                <Button onClick={handleDefaultClick}>Default</Button>
            </Grid>
            <Grid item xs={8}>
                <SearchBar />
            </Grid>
            <Grid item xs={2} textAlign="end">
                <Button>Chart View</Button>
            </Grid>
        </Grid>
    )
}

export default ControlBar;