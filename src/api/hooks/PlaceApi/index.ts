import React from 'react';
import { usePlaceTypesApi } from './PlaceTypesApi';
import { useSearchNearby } from './SearchNearbyApi';
import { usePlacesApiState } from './state';

export function usePlacesApi() {
  const state = usePlacesApiState();
  const { searchNearby, searchNearbyMore } = useSearchNearby(state);
  const { getPlaceTypes } = usePlaceTypesApi(state);

  React.useEffect(() => {
    getPlaceTypes();
  }, [getPlaceTypes]);

  return {
    places: state.places,
    plactTypes: state.placeTypes,
    nextPageToken: state.nextPageToken,
    searchNearby,
    searchNearbyMore,
  };
}
