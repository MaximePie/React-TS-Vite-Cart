import styled from 'styled-components';
import { spacings, cardBorder, flex } from '../../../styles/variables';

const StyledProduct = styled.div`
  ${cardBorder};

  width: 150px;
  
  // Content
  padding: ${spacings.medium};
  ${flex('column')};
`;

const ProductName = styled.h4`
  max-width: 100%;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { StyledProduct, ProductName };
