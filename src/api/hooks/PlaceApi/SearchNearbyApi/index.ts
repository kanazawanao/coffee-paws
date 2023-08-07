import { useApiClient } from 'api/hooks/ApiClient';
import { client } from './client';
import React from 'react';
import { PlacesApiState } from '../state';

export function useSearchNearby({
  places,
  setPlaces,
  nextPageToken,
  setNextPageToken,
  searchedKeyword,
  setSearchedKeyword,
  searchedPlaceType,
  setSearchedPlaceType,
}: PlacesApiState) {
  const { callApi } = useApiClient(client.searchNearby);

  const searchNearby = React.useCallback(
    async (keyword: string, placeType: string) => {
      const response = await callApi(keyword, placeType);
      setPlaces(response.records);
      setNextPageToken(response.nextPageToken || '');
      setSearchedKeyword(keyword);
      setSearchedPlaceType(placeType);
      return response;
    },
    [
      callApi,
      setNextPageToken,
      setPlaces,
      setSearchedKeyword,
      setSearchedPlaceType,
    ],
  );

  const searchNearbyMore = React.useCallback(async () => {
    const response = await callApi(
      searchedKeyword,
      searchedPlaceType,
      nextPageToken,
    );
    setPlaces([...places, ...response.records]);
    setNextPageToken(response.nextPageToken || '');
    return response;
  }, [
    callApi,
    nextPageToken,
    places,
    searchedKeyword,
    searchedPlaceType,
    setNextPageToken,
    setPlaces,
  ]);

  return {
    searchNearby,
    searchNearbyMore,
  };
}
