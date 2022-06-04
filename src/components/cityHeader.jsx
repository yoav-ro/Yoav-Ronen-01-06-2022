import { Typography, Grid } from "@mui/material";
import React from "react";
import FavoriteButton from "./favoriteButton";

function CityHeader({ cityData }) {

    const { cityName, country, key } = cityData;

    return (
        <Grid container spacing={1}>
            <Grid item justifyContent="center" sx={{ mt: "15px" }}>
                <FavoriteButton cityKey={key} />
            </Grid>

            <Grid item justifyContent="center">
                <Grid container>
                    <Grid item container>
                        <Typography variant="h4">
                            {cityName}
                        </Typography>

                    </Grid>
                    <Grid item container>
                        <Typography variant="h6">
                            {country}
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default CityHeader;