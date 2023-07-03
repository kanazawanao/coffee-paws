import { Configuration, TripigApi } from './clients';

const buildTripigApi = async (basePath: string) => {
  const config = new Configuration({
    basePath: basePath,
  });
  const tripigApi = new TripigApi(config);
  return {
    getNearby: tripigApi.getNearby.bind(tripigApi),
    getUsers: tripigApi.tripigUsersGet.bind(tripigApi),
  };
};

export default {
  buildTripigApi,
};
