import React from 'react';
import StyledNavLink from './styles';

export default function Navbar() {
  return (
    <div>
      <StyledNavLink to="/chocolates">Chocolats</StyledNavLink>
      <StyledNavLink to="/treats">Friandises</StyledNavLink>
      <StyledNavLink to="/pastries">Pâtisseries</StyledNavLink>
      <StyledNavLink to="/total">Total</StyledNavLink>
    </div>
  );
}
