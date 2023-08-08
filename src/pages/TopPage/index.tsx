import { usePlacesApi } from 'api/hooks/PlaceApi';
import SearchNearbyForm from './SearchNearbyForm';
import Button from 'components/Button';
import PlaceView from './PlaceView';
import React from 'react';
import Place from 'models/Place';
import GoogleMaps from 'components/GoogleMap';
import GoogleMapMarker from 'components/GoogleMap/GoogleMapMarker';

export default function TopPage() {
  const { places, nextPageToken, searchNearby, searchNearbyMore } =
    usePlacesApi();
  const [selectedPlaces, setSelectedPlaces] = React.useState<Place[]>([]);

  const handleClick = React.useCallback(
    (place: Place) => {
      if (
        selectedPlaces.some(
          (selectedPlace) => selectedPlace.placeId === place.placeId,
        )
      ) {
        setSelectedPlaces(
          selectedPlaces.filter((selectedPlace) => {
            return selectedPlace.placeId !== place.placeId;
          }),
        );
      } else {
        setSelectedPlaces([...selectedPlaces, place]);
      }
    },
    [selectedPlaces],
  );

  return (
    <>
      <SearchNearbyForm onSubmit={searchNearby} />
      <GoogleMaps lat={35.6812} lng={139.7671}>
        {selectedPlaces.map((selectedPlace) => (
          <GoogleMapMarker
            key={selectedPlace.placeId}
            latlng={
              new google.maps.LatLng(selectedPlace.lat, selectedPlace.lng)
            }
          />
        ))}
      </GoogleMaps>
      {places.map((place) => (
        <PlaceView key={place.placeId} place={place} onClick={handleClick} />
      ))}
      {nextPageToken && <Button onClick={searchNearbyMore}>もっと見る</Button>}
    </>
  );
}
