import { useQuery, useQueryClient } from 'react-query';
import axios, { AxiosError } from 'axios';
import Product from '../../../types/Product';
import ErrorCode from '../../../types/ErrorCode';

export default function useTreats() {
  const { data: treats, isLoading, error } = useQuery<Product[], AxiosError>(
    'treats',
    getTreats,
  );

  const errorCode: ErrorCode = error?.response?.data as ErrorCode;

  const queryClient = useQueryClient();

  function getTreats() {
    return axios.get('http://localhost:4001/treats')
      .then((response) => response.data);
  }

  function reload() {
    queryClient.invalidateQueries('treats');
  }

  return {
    treats, isLoading, errorCode, reload,
  };
}
