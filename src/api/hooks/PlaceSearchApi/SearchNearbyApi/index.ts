import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';
import React from 'react';

export function useSearchNearby() {
  const { callApi } = useApiClient(client.searchNearby);

  const searchNearby = React.useCallback(
    async (keyword: string) => {
      const response = await callApi(keyword);
      return response;
    },
    [callApi],
  );

  return {
    searchNearby: searchNearby,
  };
}
