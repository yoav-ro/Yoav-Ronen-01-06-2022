import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from './components/favoritesPage';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import { setCurrCity, setDefaultCity } from './utils/actions';
import { getCurrentLocationCity } from './utils/apiRequests';
import { telAvivData } from './utils/constants';

function App() {
  const dispatch = useDispatch();

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
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;