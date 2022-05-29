import React, { useState } from "react";
import { citySearch, getCityWeather } from "../utils/apiRequests";

function SearchBar() {
    const [input, setInput] = useState("");

    const handleClick = () => {
        getCityWeather(input);
    }

    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Search City" />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchBar;