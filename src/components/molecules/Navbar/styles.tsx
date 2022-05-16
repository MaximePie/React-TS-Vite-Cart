import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { spacings, fontSizes } from '../../../styles/variables';

const StyledNavbar = styled.div`
  display: flex; 
`;

const StyledNavLink = styled(NavLink)`
  margin-right: ${spacings.medium};
  
  text-transform: capitalize;
  text-decoration: none;
  
  font-size: ${fontSizes.large};
  
  &.active {
    color: #6fff00;
    text-decoration: underline;
  }
`;

export { StyledNavLink, StyledNavbar };
