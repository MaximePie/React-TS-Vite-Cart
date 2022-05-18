import React from 'react';
import { StyledProduct, ProductName } from './styles';
import ProductProps from './types';

export default function Product({ product }: ProductProps) {
  const { name } = product;

  return (
    <StyledProduct>
      <ProductName title={name}>{name}</ProductName>
    </StyledProduct>
  );
}
