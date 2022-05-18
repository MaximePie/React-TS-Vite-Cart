import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChocolatesProps from './types';
import useChocolates from './useChocolates';
import Error from '../../molecules/Error/Error';
import Product from '../../molecules/Product/Product';
import { decrement } from '../../../redux/productSlice';
import { RootState } from '../../../redux/store';

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
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.product.value);

  return (
    <div>
      <h4>
        Chocolats :
        {value}
      </h4>
      <button type="button" onClick={() => dispatch(decrement())}>Décrémenter</button>
      {error
        ? <Error code={error} />
        : (
          <div>
            {chocolates.map((chocolate) => (
              <Product product={chocolate} />))}
          </div>
        )}
    </div>
  );
}
