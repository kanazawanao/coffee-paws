import { Configuration, CoffeePawsApi } from './clients';

const buildCoffeePawsApi = async (basePath: string) => {
  const config = new Configuration({
    basePath: basePath,
  });
  const coffeePawsApi = new CoffeePawsApi(config);
  return coffeePawsApi;
};

export default {
  buildCoffeePawsApi,
};
