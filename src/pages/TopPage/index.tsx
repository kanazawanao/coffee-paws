import { usePlacesApi } from 'api/hooks/PlaceApi';
import SearchNearbyForm from './SearchNearbyForm';
import Button from 'components/Button';

export default function TopPage() {
  const { places, nextPageToken, plactTypes, searchNearby, searchNearbyMore } =
    usePlacesApi();

  return (
    <>
      <SearchNearbyForm placeTypes={plactTypes} onSubmit={searchNearby} />
      {places.map((place) => (
        <div key={place.placeId}>{place.name}</div>
      ))}
      {nextPageToken && <Button onClick={searchNearbyMore}>もっと見る</Button>}
    </>
  );
}
