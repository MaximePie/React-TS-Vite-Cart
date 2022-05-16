import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../../../types/Product';
import ChocolatesProps from './types';

export default function useChocolates({ isWrongPath }: ChocolatesProps) {
  const [chocolates, setChocolates] = useState<Product[]>([]);
  const [error, setError] = useState(''); // Inutile de préciser le type, c'est déjà fait dans l'initialisation
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
        setError('');
        setChocolates(response.data);
      })
      .catch((serverError) => {
        setChocolates([]);
        setError(serverError.response.data);
      });
  }

  return { chocolates, error };
}
