import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: #6fff00;
  }
`;

export default StyledNavLink;
