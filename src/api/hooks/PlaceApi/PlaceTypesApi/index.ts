import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';
import { PlacesApiState } from '../state';

export function usePlaceTypesApi({ setPlaceTypes }: PlacesApiState) {
  const { callApi } = useApiClient(client.getPlaceTypes, setPlaceTypes);

  return {
    getPlaceTypes: callApi,
  };
}
