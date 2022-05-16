import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <NavLink to="/chocolates">Chocolats</NavLink>
      <NavLink to="/treats">Friandises</NavLink>
      <NavLink to="/pastries">Pâtisseries</NavLink>
      <NavLink to="/total">Total</NavLink>
    </div>
  );
}
