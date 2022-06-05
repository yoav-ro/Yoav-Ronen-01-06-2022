import { FormControlLabel, FormGroup, Menu, MenuItem, Switch } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setWeatherUnit } from "../../utils/actions";

function SettingsMenu({ anchorEl, onClose, setDarkMode }) {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const isChecked = e.target.checked;
        const newUnit = isChecked ? "Metric" : "Imperial";
        dispatch(setWeatherUnit(newUnit))
    }

    const handleChangeDarkMode = (e) => {
        const isChecked = e.target.checked;
        setDarkMode(isChecked)
    }

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={onClose}>
            <MenuItem disableTouchRipple disableRipple>Settings</MenuItem>
            <MenuItem>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked onChange={handleChange} />} label="Use Metric" />
                </FormGroup>
            </MenuItem>
            <MenuItem>
                <FormGroup>
                    <FormControlLabel control={<Switch onChange={handleChangeDarkMode} />} label="Dark Mode" />
                </FormGroup>
            </MenuItem>
        </Menu>
    )
}

export default SettingsMenu;