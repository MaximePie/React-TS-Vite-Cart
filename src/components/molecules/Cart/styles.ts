import styled from 'styled-components';
import { cardBorder, flex, spacings } from '../../../styles/variables';

export const StyledCart = styled.div`
  width: 400px;
  padding: ${spacings.medium};
  ${cardBorder};
`;

export const Product = styled.div`
  ${flex('row', 'space-between')};
`;

export const Header = styled.h3`
  margin: ${spacings.small} 0;
`;

export const DeleteButton = styled.button`
  margin-left: ${spacings.small};
`;

export const Total = styled.p`
  font-weight: bold;
`;
