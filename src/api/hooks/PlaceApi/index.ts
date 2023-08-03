import { useSearchNearby } from './SearchNearbyApi';
import { usePlacesApiState } from './state';

export function usePlacesApi() {
  const state = usePlacesApiState();
  const { searchNearby } = useSearchNearby(state);

  return {
    places: state.places,
    searchNearby,
  };
}
