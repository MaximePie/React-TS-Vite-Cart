import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Product from '../../../types/Product';
import ChocolatesProps from './types';
import ErrorCode from '../../../types/ErrorCode';
import { RootState } from '../../../redux/store';

export default function useChocolates({ isWrongPath }: ChocolatesProps) {
  const [chocolates, setChocolates] = useState<Product[]>([]);
  // const [chocolate, setChocolate] = useState<Product>({} as Product);
  // const [chocolate, setChocolate] = useState<Product | undefined>(undefined);
  const cart = useSelector((state: RootState) => state.product.cart);

  const [error, setError] = useState<ErrorCode | undefined>(undefined);
  let isMounted = false;

  useEffect(onMount, []);

  function onMount() {
    isMounted = true;
    if (isMounted) {
      fetchChocolate();
    }

    // Tous les useEffect doivent renvoyer une fonction de nettoyage.
    // Cette fonction est appelée lors du démontage du composant
    /**
     * @see https://overreacted.io/a-complete-guide-to-useeffect/#so-what-about-cleanup
     */
    return () => {
      isMounted = false;
    };
  }

  function fetchChocolate() {
    let url = 'http://localhost:4001/chocolates/';

    if (isWrongPath) {
      url += '/wrong';
    }

    axios.get(url)
      .then((response) => {
        setError(undefined);
        setChocolates(response.data);
      })
      .catch((serverError) => {
        setChocolates([]);
        setError(serverError.response.data);
      });
  }

  return { chocolates, error, cart };
}
