import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';
import React from 'react';
import { PlacesApiState } from '../state';

export function useSearchNearby({ setPlaces }: PlacesApiState) {
  const { callApi } = useApiClient(client.searchNearby);

  const searchNearby = React.useCallback(
    async (keyword: string) => {
      const response = await callApi(keyword);
      setPlaces(response.records);
      return response;
    },
    [callApi, setPlaces],
  );

  return {
    searchNearby: searchNearby,
  };
}
