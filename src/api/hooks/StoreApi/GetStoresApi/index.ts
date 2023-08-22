import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';
import { StoresApiState } from '../state';

export function useSearchStoresApi({ setStores }: StoresApiState) {
  const { callApi } = useApiClient(client.getStores, setStores);

  return {
    getStores: callApi,
  };
}
