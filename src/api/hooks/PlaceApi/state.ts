import Place from 'models/Place';
import PlaceType from 'models/PlaceType';
import React from 'react';

export function usePlacesApiState() {
  const [places, setPlaces] = React.useState<Place[]>([]);
  const [placeTypes, setPlaceTypes] = React.useState<PlaceType[]>([]);

  return {
    places,
    setPlaces,
    placeTypes,
    setPlaceTypes,
  };
}

export type PlacesApiState = ReturnType<typeof usePlacesApiState>;
