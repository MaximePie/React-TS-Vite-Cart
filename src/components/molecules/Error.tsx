import React from 'react';
import styled from 'styled-components';

type ErrorProps = {
  message: String,
}

const StyledError = styled.div`
  color: red;
`;

export default function Error({ message }: ErrorProps) {
  return (
    <StyledError>
      {message}
    </StyledError>
  );
}
