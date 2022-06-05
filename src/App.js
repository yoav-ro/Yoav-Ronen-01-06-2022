import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from './components/favoritesPage/favoritesPage';
import HomePage from './components/homePage/homePage';
import Navbar from './components/navbar/navbar';
import { setCurrCity, setDefaultCity } from './utils/actions';
import { getCurrentLocationCity } from './utils/apiRequests';
import { telAvivData } from './utils/constants';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleFail, handleFail);
  }, [])


  const handleSuccess = async (value) => { // disabled to not waste api requests
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