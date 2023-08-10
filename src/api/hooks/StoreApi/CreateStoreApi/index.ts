import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';

export function useCreateStoreApi() {
  const { callApi } = useApiClient(client.createStore);

  return {
    createStore: callApi,
  };
}
