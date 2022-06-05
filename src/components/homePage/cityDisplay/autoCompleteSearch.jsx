import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";

import { getCityDataAutoComplete } from "../../../utils/apiRequests";
import { DebounceInput } from "react-debounce-input";
import { setCurrCity } from "../../../utils/actions";

function AutoCompleteSearch({ }) {
    const [input, setInput] = useState("");
    const [cityOptions, setCityOptions] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (value) => {
        setInput(value);
    }

    const updateOptions = async () => {
        if (input !== "") {
            const autoCompleteOptions = await getCityDataAutoComplete(input);
            console.log(autoCompleteOptions)
            setCityOptions(autoCompleteOptions);
        }
    }

    const handleSelect = (e) => {
        const selectedCity = cityOptions.find(city => city.cityName === e.target.value)
        if (selectedCity) {
            console.log(selectedCity);
            dispatch(setCurrCity(selectedCity));
        }

    }

    return (
        <Box justifyContent="center" display="flex">
            <Autocomplete
                onInputChange={(e) => handleChange(e.target.value)}
                onSelect={handleSelect}
                options={cityOptions}
                getOptionLabel={(city) => `${city.cityName}`}
                isOptionEqualToValue={(option, value) =>
                    option.cityName === value.cityName
                }
                renderInput={
                    (params) =>
                        <DebounceInput
                            {...params}
                            element={TextField}
                            debounceTimeout={500}
                            label="Search City"
                            onChange={updateOptions}
                        />
                }
                sx={{ width: 210 }}
                disablePortal
            />
        </Box >
    )
}

export default AutoCompleteSearch;