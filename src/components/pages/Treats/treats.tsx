import React from 'react';
import useTreats from './useTreats';
import Product from '../../molecules/Product/Product';
import { Loading, StyledTreats } from './styles';
import Error from '../../molecules/Error/Error';

export default function Treats() {
  const {
    treats, errorCode, isLoading, reload, mutation,
  } = useTreats();

  return (
    <>
      <h4>Friandises</h4>
      <button type="button" onClick={reload}>Recharger</button>
      <button type="button" onClick={() => mutation.mutate()}>Créer</button>
      {errorCode && <Error code={errorCode} />}
      {isLoading && <Loading>Chargement</Loading>}

      {treats && (
      <StyledTreats>
        {treats.map((treat) => <Product key={treat._id.toString()} product={treat} />)}
      </StyledTreats>
      )}
    </>
  );
}
