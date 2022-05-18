import React from 'react';
import ChocolatesProps from './types';
import useChocolates from './useChocolates';
import Error from '../../molecules/Error/Error';
import Product from '../../molecules/Product/Product';
import StyledChocolates from './styles';
import Cart from '../../molecules/Cart/Cart';

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

  return (
    <div>
      <h4>
        Chocolats :
      </h4>
      <Cart />
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
