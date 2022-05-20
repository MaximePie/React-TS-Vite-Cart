import { useQuery, useQueryClient } from 'react-query';
import axios, { AxiosError } from 'axios';
import Product from '../../../types/Product';
import ErrorCode from '../../../types/ErrorCode';

export default function useTreats() {
  const queryClient = useQueryClient();

  const { data: treats, isLoading, error } = useQuery<Product[], AxiosError>(
    ['treats', { limit: 10 }],
    getTreats,
  );
  const errorCode: ErrorCode = error?.response?.data as ErrorCode;

  function getTreats(params: any) {
    const { queryKey: [key, { limit }] } = params;
    return axios.get(`http://localhost:4001/${key}?limit=${limit}`)
      .then((response) => response.data);
  }

  function reload() {
    queryClient.invalidateQueries(['treats']);
  }

  return {
    treats, isLoading, errorCode, reload,
  };
}
