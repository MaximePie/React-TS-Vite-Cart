import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/store';
import { flex } from '../../../styles/variables';

const StyledCart = styled.div`
`;

const Product = styled.div`
  ${flex()};
`;

const Header = styled.h4`
`;

export default function Cart() {
  const cart = useSelector((state: RootState) => state.product.cart);

  return (
    <StyledCart>
      <Header>
        Votre commande
      </Header>
      {cart.map((product) => (
        <Product>
          {product.name}
        </Product>
      ))}
    </StyledCart>
  );
}
