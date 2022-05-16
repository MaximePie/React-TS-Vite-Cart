import React from 'react';
import Chocolates from './components/pages/Chocolates/chocolates';
import Treats from './components/pages/Treats/treats';
import Pastries from './components/pages/Pastries/pastries';
import Total from './components/pages/Total/total';

function App() {
  return (
    <div className="App">
      <h1>Interface de commande</h1>
      <p>Commandez en toute euh... simplicité. Oui, c&apos;est ça</p>
      <Chocolates />
      <Treats />
      <Pastries />
      <Total />
    </div>
  );
}

export default App;
