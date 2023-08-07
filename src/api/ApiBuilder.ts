import { Configuration, TripigApi } from './clients';

const buildTripigApi = async (basePath: string) => {
  const config = new Configuration({
    basePath: basePath,
  });
  const tripigApi = new TripigApi(config);
  return {
    searchNearby: tripigApi.searchNearby.bind(tripigApi),
    getPlaceTypes: tripigApi.getPlaceTypes.bind(tripigApi),
  };
};

export default {
  buildTripigApi,
};
