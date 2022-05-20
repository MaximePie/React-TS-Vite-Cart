import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledProduct, Name, Price } from './styles';
import ProductProps from './types';
import { add, remove } from '../../../redux/productSlice';

export default function Product({ product }: ProductProps) {
  const { name, price, _id } = product;
  const dispatch = useDispatch();

  return (
    <StyledProduct>
      <Name title={name}>{name}</Name>
      <button type="button" onClick={() => { dispatch(remove(_id)); }}>Delete</button>
      <Price>
        {price}
        €
      </Price>
      <button
        type="button"
        onClick={() => { dispatch(add(product)); }}
      >
        Ajouter
      </button>
    </StyledProduct>
  );
}
