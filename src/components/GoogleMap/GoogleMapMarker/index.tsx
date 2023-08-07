import React from 'react';
import { GoogleMapsContext } from '../context';

type Props = {
  latlng: google.maps.LatLng;
};

export default function GoogleMapMarker({ latlng }: Props) {
  const { googleMap } = React.useContext(GoogleMapsContext);
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  const createMarker = React.useCallback(() => {
    if (!googleMap) return;

    const marker = new google.maps.Marker({
      position: latlng,
      map: googleMap,
    });
    googleMap.setCenter(latlng);

    return marker;
  }, [googleMap, latlng]);

  const removeMarker = React.useCallback(() => {
    if (!marker) return;

    marker.setMap(null);
  }, [marker]);

  React.useEffect(() => {
    if (!marker) {
      setMarker(createMarker());
    }
    return () => {
      if (marker) {
        removeMarker();
      }
    };
  }, [createMarker, marker, removeMarker]);

  return null;
}
