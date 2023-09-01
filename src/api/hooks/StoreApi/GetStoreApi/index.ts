import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';
import { StoreApiState } from '../state';

export function useGetStoreApi({ setStore }: StoreApiState) {
  const { callApi } = useApiClient(client.getStore, setStore);

  return {
    getStore: callApi,
  };
}
