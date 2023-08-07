import { usePlacesApi } from 'api/hooks/PlaceApi';
import SearchNearbyForm from './SearchNearbyForm';
import Button from 'components/Button';
import PlaceView from './PlaceView';

export default function TopPage() {
  const { places, nextPageToken, plactTypes, searchNearby, searchNearbyMore } =
    usePlacesApi();

  return (
    <>
      <SearchNearbyForm placeTypes={plactTypes} onSubmit={searchNearby} />
      {places.map((place) => (
        <PlaceView key={place.placeId} place={place} />
      ))}
      {nextPageToken && <Button onClick={searchNearbyMore}>もっと見る</Button>}
    </>
  );
}
