import React from 'react';
import ChocolatesProps from './types';
import useChocolates from './useChocolates';
import Error from '../../molecules/Error';

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
      <h4>Chocolats</h4>
      {error
        ? <Error message={error} />
        : chocolates.map((chocolate) => (
          <p
            key={chocolate._id.toString()}
          >
            {JSON.stringify(chocolate)}
          </p>
        ))}
    </div>
  );
}
