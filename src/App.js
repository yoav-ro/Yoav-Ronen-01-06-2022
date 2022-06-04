import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from './components/favoritesPage';
import HomePage from './components/homePage';
import Navbar from './components/navbar';

function App() {
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