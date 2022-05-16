import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ObjectId } from 'bson';

type Product = {
  _id: ObjectId,
  name: String,
}

/**
 * Ce composant utilise la méthode 1 pour récupérer des données : Axios, useState
 */
export default function Chocolates() {
  const [chocolates, setChocolates] = useState<Product[]>([]);
  let isMounted = false;

  useEffect(onMount, []);

  return (
    <div>
      <h4>Chocolats</h4>
      {chocolates.map((chocolate) => (
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
    const url = 'http://localhost:4001/chocolates/';
    axios.get(url)
      .then((response) => {
        setChocolates(response.data);
      });
  }
}
