import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChocolatesProps from './types';
import Product from '../../../types/Product';

/**
 * isWrongPath est optionnelle, cette props a besoin d'une valeur par défaut
 */
Chocolates.defaultProps = {
  isWrongPath: false,
};

/**
 * Ce composant utilise la méthode 1 pour récupérer des données : Axios, useState
 */
export default function Chocolates({ isWrongPath }: ChocolatesProps) {
  const [chocolates, setChocolates] = useState<Product[]>([]);
  const [error, setError] = useState(''); // Inutile de préciser le type, c'est déjà fait dans l'initialisation
  let isMounted = false;

  useEffect(onMount, []);

  return (
    <div>
      <h4>Chocolats</h4>
      {error
        ? (
          <p style={{ color: 'red' }}>
            {error}
          </p>
        )
        : chocolates.map((chocolate) => (
          <p
            key={chocolate._id.toString()}
          >
            {JSON.stringify(chocolate)}
          </p>
        ))}
    </div>
  );

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
        console.log(serverError);
        setError(serverError.response.data);
      });
  }
}
