import React from 'react';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Chocolates from './components/pages/Chocolates/chocolates';
import Treats from './components/pages/Treats/treats';
import Pastries from './components/pages/Pastries/pastries';
import Total from './components/pages/Total/total';
import Navbar from './components/molecules/Navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <h1>Interface de commande</h1>
        <Routes>
          <Route path="/" element={<Chocolates />} />
          <Route path="/chocolates" element={<Chocolates />} />
          <Route path="/treats" element={<Treats />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/total" element={<Total />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
