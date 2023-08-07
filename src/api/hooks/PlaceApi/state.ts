import Place from 'models/Place';
import PlaceType from 'models/PlaceType';
import React from 'react';

export function usePlacesApiState() {
  const [places, setPlaces] = React.useState<Place[]>([]);
  const [nextPageToken, setNextPageToken] = React.useState('');
  const [placeTypes, setPlaceTypes] = React.useState<PlaceType[]>([]);
  const [searchedKeyword, setSearchedKeyword] = React.useState('');
  const [searchedPlaceType, setSearchedPlaceType] = React.useState('');

  return {
    places,
    setPlaces,
    nextPageToken,
    setNextPageToken,
    placeTypes,
    setPlaceTypes,
    searchedKeyword,
    setSearchedKeyword,
    searchedPlaceType,
    setSearchedPlaceType,
  };
}

export type PlacesApiState = ReturnType<typeof usePlacesApiState>;
