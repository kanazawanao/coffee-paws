import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';
import { BeansApiState } from '../state';

export function useSearchBeansApi({ setBeans }: BeansApiState) {
  const { callApi } = useApiClient(client.searchBeans, setBeans);

  return {
    searchBeans: callApi,
  };
}
