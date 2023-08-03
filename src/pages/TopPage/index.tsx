import { usePlacesApi } from 'api/hooks/PlaceApi';
import SearchNearbyForm from './SearchNearbyForm';
import React from 'react';

export default function TopPage() {
  const { places, searchNearby } = usePlacesApi();

  const handleSubmit = React.useCallback(
    (keyword: string) => {
      searchNearby(keyword);
    },
    [searchNearby],
  );

  return (
    <>
      <SearchNearbyForm onSubmit={handleSubmit} />
      {places.map((place) => (
        <div key={place.placeId}>{place.name}</div>
      ))}
    </>
  );
}
