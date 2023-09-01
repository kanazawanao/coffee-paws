import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';

export function useCreateBeanApi() {
  const { callApi } = useApiClient(client.createBean);

  return {
    createBean: callApi,
  };
}
