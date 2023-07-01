import React from 'react';

type Props = {
  googleMap: google.maps.Map | null;
};
export const GoogleMapsContext = React.createContext<Props>({
  googleMap: null,
});
