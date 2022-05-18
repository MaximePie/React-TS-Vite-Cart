import styled from 'styled-components';
import { spacings, cardBorder, flex } from '../../../styles/variables';

const StyledProduct = styled.div`
  
  // Positioning
  margin: 0 ${spacings.small} ${spacings.small} 0;
  
  // Shape
  ${cardBorder};

  width: 150px;
  height: 150px;
  
  // Content
  padding: ${spacings.medium};
  ${flex('column')};
`;

const Name = styled.h4`
  margin: ${spacings.small};
  max-width: 100%;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Price = styled.p`
`;

export { StyledProduct, Name, Price };
