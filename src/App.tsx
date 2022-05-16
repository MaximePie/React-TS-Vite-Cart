import React from 'react';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Chocolates from './components/pages/Chocolates/chocolates';
import Treats from './components/pages/Treats/treats';
import Pastries from './components/pages/Pastries/pastries';
import Total from './components/pages/Total/total';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Interface de commande</h1>
        <p>Commandez en toute euh... simplicité. Oui, c&apos;est ça</p>
        <div>
          <NavLink to="/chocolates">Chocolats</NavLink>
          <NavLink to="/treats">Friandises</NavLink>
          <NavLink to="/pastries">Pâtisseries</NavLink>
          <NavLink to="/total">Total</NavLink>
        </div>
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
