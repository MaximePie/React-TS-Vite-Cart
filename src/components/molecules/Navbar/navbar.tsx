import React from 'react';
import { StyledNavLink, StyledNavbar } from './styles';

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavLink to="/chocolates">Chocolats</StyledNavLink>
      <StyledNavLink to="/treats">Friandises</StyledNavLink>
      <StyledNavLink to="/pastries">Pâtisseries</StyledNavLink>
      <StyledNavLink to="/total">Total</StyledNavLink>
    </StyledNavbar>
  );
}
