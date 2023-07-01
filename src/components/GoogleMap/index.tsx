import { Loader } from '@googlemaps/js-api-loader';
import { VITE_GOOGLE_MAPS_API_KEY } from 'app/env';
import React from 'react';
import { GoogleMapsContext } from './context';

import styles from './style.module.css';

type Props = {
  children: React.ReactNode;
};
export default function GoogleMaps({ children }: Props) {
  const googleMapsElement = React.useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = React.useState<google.maps.Map | null>(
    null,
  );
  const [googleMapsApiLoaded, setGoogleMapsApiLoaded] =
    React.useState<boolean>(false);

  const initGoogleMapsApi = React.useCallback(async () => {
    const loader = new Loader({
      apiKey: VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      region: 'JP',
      language: 'ja',
      libraries: ['places'],
    });
    const mapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
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
  }, []);

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
