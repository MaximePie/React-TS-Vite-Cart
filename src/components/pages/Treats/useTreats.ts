import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios, { AxiosError } from 'axios';
import faker from '@faker-js/faker';
import Product from '../../../types/Product';
import ErrorCode from '../../../types/ErrorCode';

export default function useTreats() {
  const queryClient = useQueryClient();

  const { data: treats, isLoading, error } = useQuery<Product[], AxiosError>(
    ['treats', { limit: 500 }],
    getTreats,
  );

  const mutation = useMutation(createRandomTreat, {
    onSuccess: () => queryClient.invalidateQueries('treats'),
  });

  const errorCode: ErrorCode = error?.response?.data as ErrorCode;

  function getTreats(params: any) {
    const { queryKey: [key, { limit }] } = params;
    return axios.get(`http://localhost:4001/${key}?limit=${limit}`)
      .then((response) => response.data);
  }

  function createRandomTreat() {
    return axios.post('http://localhost:4001/treats', {
      category: 'treats',
      name: faker.commerce.product(),
      price: faker.commerce.price(),
    }).then((data) => data);
  }

  function reload() {
    queryClient.invalidateQueries(['treats']);
  }

  return {
    treats, isLoading, errorCode, reload, mutation,
  };
}
