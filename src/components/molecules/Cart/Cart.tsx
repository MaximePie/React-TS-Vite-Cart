import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../../redux/productSlice';
import {
  Header, StyledCart, Total, Product, DeleteButton,
} from './styles';
import { RootState } from '../../../redux/store';

export default function Cart() {
  const { cart, total } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  return (
    <StyledCart>
      <Header>
        Votre commande
      </Header>
      <Total>
        {`Total: ${total} €`}
      </Total>
      {cart.map(({ name, price, _id }) => (
        <Product>
          <span>
            {name}
          </span>
          <span>
            {price}
            €

            <DeleteButton type="button" onClick={() => dispatch(remove(_id))}>X</DeleteButton>
          </span>
        </Product>
      ))}
    </StyledCart>
  );
}
