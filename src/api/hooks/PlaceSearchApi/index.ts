import { useSearchNearby } from './SearchNearbyApi';

export function usePlaceSearchApi() {
  const { searchNearby } = useSearchNearby();

  return {
    searchNearby,
  };
}
