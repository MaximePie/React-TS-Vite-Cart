import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import Chocolates from './components/pages/Chocolates/chocolates';
import Treats from './components/pages/Treats/treats';
import Pastries from './components/pages/Pastries/pastries';
import Total from './components/pages/Total/total';
import Navbar from './components/molecules/Navbar/navbar';

const App = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`;

function AppContainer() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Navbar />
          <h1>Interface de commande</h1>
          <Routes>
            <Route path="/" element={<Chocolates />} />
            <Route path="/chocolates" element={<Chocolates key="chocolates" />} />
            <Route path="/treats" element={<Treats />} />
            <Route path="/pastries" element={<Pastries />} />
            <Route path="/wrong" element={<Chocolates isWrongPath key="error" />} />
            <Route path="/total" element={<Total />} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  );
}

export default AppContainer;
