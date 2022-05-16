import React from 'react';
import StyledError from './style';
import ErrorProps from './types';
import { errors } from './data';

export default function Error({ code }: ErrorProps) {
  const error = errors[code];
  if (error) {
    const { title, content } = error;
    return (
      <StyledError>
        <h4>
          {title}
        </h4>
        {content}
      </StyledError>
    );
  }
  return null;
}
