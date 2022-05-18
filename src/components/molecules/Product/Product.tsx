import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledProduct, ProductName } from './styles';
import ProductProps from './types';
import { increment } from '../../../redux/productSlice';

export default function Product({ product }: ProductProps) {
  const { name } = product;
  const dispatch = useDispatch();

  return (
    <StyledProduct>
      <ProductName title={name}>{name}</ProductName>
      <button
        type="button"
        onClick={() => dispatch(increment())}
      >
        Ajouter
      </button>
    </StyledProduct>
  );
}
