import { Place as ApiPlace, PlaceType as ApiPlaceType } from 'api/clients/api';
import Place from 'models/Place';
import PlaceType from 'models/PlaceType';

export function fromApiPlace(apiPlace: ApiPlace): Place {
  return {
    placeId: apiPlace.placeId || '',
    name: apiPlace.name || '',
    icon: apiPlace.icon || '',
    lat: apiPlace.lat || 0,
    lng: apiPlace.lng || 0,
    photoUrls: apiPlace.photoUrls || [],
  };
}

export function fromApiPlaceType(apiPlaceType: ApiPlaceType): PlaceType {
  return {
    value: apiPlaceType.key,
    label: apiPlaceType.name,
  };
}
