import { usePlacesApi } from 'api/hooks/PlaceApi';
import SearchNearbyForm from './SearchNearbyForm';

export default function TopPage() {
  const { places, plactTypes, searchNearby } = usePlacesApi();

  return (
    <>
      <SearchNearbyForm placeTypes={plactTypes} onSubmit={searchNearby} />
      {places.map((place) => (
        <div key={place.placeId}>{place.name}</div>
      ))}
    </>
  );
}
