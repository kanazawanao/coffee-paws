import GoogleMaps from 'components/GoogleMap';
import SearchNearbyForm from './SearchNearbyForm';
import React from 'react';

export default function TopPage() {
  const [lat, setLat] = React.useState(35.652832);
  const [lng, setLng] = React.useState(139.839478);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  const handleSubmit = React.useCallback((lat: number, lng: number) => {
    setLat(lat);
    setLng(lng);
  }, []);

  return (
    <>
      <GoogleMaps lat={lat} lng={lng}>
        <></>
      </GoogleMaps>
      <SearchNearbyForm onSubmit={handleSubmit} />
    </>
  );
}
