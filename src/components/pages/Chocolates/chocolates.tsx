import React from 'react';
import { useSelector } from 'react-redux';
import ChocolatesProps from './types';
import useChocolates from './useChocolates';
import Error from '../../molecules/Error/Error';
import Product from '../../molecules/Product/Product';
import { RootState } from '../../../redux/store';
import StyledChocolates from './styles';

/**
 * isWrongPath est optionnelle, cette props a besoin d'une valeur par défaut
 */
Chocolates.defaultProps = {
  isWrongPath: false,
};

/**
 * Ce composant utilise la méthode 1 pour récupérer des données : Axios, useState
 */
export default function Chocolates(props: ChocolatesProps) {
  const { chocolates, error } = useChocolates(props);
  const cart = useSelector((state: RootState) => state.product.cart);

  return (
    <div>
      <h4>
        Chocolats :
      </h4>
      <p>{JSON.stringify(cart.map(({ name, price }) => name + price))}</p>
      {error
        ? <Error code={error} />
        : (
          <StyledChocolates>
            {chocolates.map((chocolate) => (
              <Product product={chocolate} />))}
          </StyledChocolates>
        )}
    </div>
  );
}
