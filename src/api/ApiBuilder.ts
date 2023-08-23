import { Configuration, CoffeePawsApi } from './clients';
import { auth } from 'config/firebase';

const buildCoffeePawsApi = async (basePath: string) => {
  const token = await auth.currentUser?.getIdToken();
  const config = new Configuration({
    basePath: basePath,
    baseOptions: {
      headers: {
        'Coffee-Paws-Auth-Token': `${token}`,
      },
    },
  });
  return new CoffeePawsApi(config);
};

export default {
  buildCoffeePawsApi,
};
