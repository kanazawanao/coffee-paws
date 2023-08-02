import { Place as ApiPlace } from 'api/clients/api';
import Place from 'models/Place';

export function fromApiPlace(apiPlace: ApiPlace): Place {
  return {
    placeId: apiPlace.placeId || '',
    name: apiPlace.name || '',
    icon: apiPlace.icon || '',
    lat: apiPlace.lat || 0,
    lng: apiPlace.lng || 0,
  };
}
