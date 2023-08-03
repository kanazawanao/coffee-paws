import Place from 'models/Place';
import React from 'react';

export function usePlacesApiState() {
  const [places, setPlaces] = React.useState<Place[]>([]);

  return {
    places,
    setPlaces,
  };
}

export type PlacesApiState = ReturnType<typeof usePlacesApiState>;
