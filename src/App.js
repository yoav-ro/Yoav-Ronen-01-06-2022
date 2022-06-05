import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from './components/favoritesPage/favoritesPage';
import HomePage from './components/homePage/homePage';
import Navbar from './components/navbar/navbar';
import { setCurrCity, setDefaultCity } from './utils/actions';
import { getCurrentLocationCity } from './utils/apiRequests';
import { telAvivData } from './utils/constants';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : "light",
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleFail);
  }, [])

  const handleSuccess = async (value) => {
    const lat = value.coords.latitude;
    const long = value.coords.longitude;
    const cityData = await getCurrentLocationCity(lat, long);
    dispatch(setDefaultCity(cityData));
    dispatch(setCurrCity(cityData));
  }

  const handleFail = () => {
    dispatch(setDefaultCity(telAvivData));
    dispatch(setCurrCity(telAvivData));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navbar setDarkMode={setDarkMode} />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;