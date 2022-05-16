import React from 'react';
import { StyledNavLink, StyledNavbar } from './styles';

/**
 * Display a navbar
 */
export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavLink to="/chocolates">Chocolatsa</StyledNavLink>
      <StyledNavLink to="/treats">Friandises</StyledNavLink>
      <StyledNavLink to="/pastries">Pâtisseries</StyledNavLink>
      <StyledNavLink to="/total">Total</StyledNavLink>
    </StyledNavbar>
  );
}
