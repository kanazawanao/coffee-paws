import { Loader } from '@googlemaps/js-api-loader';
import { VITE_GOOGLE_MAPS_API_KEY } from 'app/env';
import React from 'react';
import { GoogleMapsContext } from './context';

import styles from './style.module.css';

type Props = {
  lat: number;
  lng: number;
  children: React.ReactNode;
};
export default function GoogleMaps({ lat, lng, children }: Props) {
  const googleMapsElement = React.useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = React.useState<google.maps.Map | null>(
    null,
  );
  const [googleMapsApiLoaded, setGoogleMapsApiLoaded] =
    React.useState<boolean>(false);

  const initGoogleMapsApi = React.useCallback(async () => {
    console.log(lat, lng);
    const loader = new Loader({
      apiKey: VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      region: 'JP',
      language: 'ja',
      libraries: ['places'],
    });
    const mapOptions = {
      center: {
        lat: lat,
        lng: lng,
      },
      zoom: 18,
    };
    loader
      .importLibrary('maps')
      .then(({ Map }) => {
        const map = new Map(googleMapsElement.current, mapOptions);
        setGoogleMap(map);
      })
      .catch((e) => {
        // do something
        console.log(e);
      });
    setGoogleMapsApiLoaded(true);
  }, [lat, lng]);

  React.useEffect(() => {
    if (googleMapsElement && googleMapsElement.current) {
      initGoogleMapsApi();
    }
  }, [initGoogleMapsApi]);

  return (
    <>
      <div className={styles.map} ref={googleMapsElement} />

      {googleMapsApiLoaded && (
        <GoogleMapsContext.Provider
          value={{
            googleMap: googleMap,
          }}
        >
          {children}
        </GoogleMapsContext.Provider>
      )}
    </>
  );
}
