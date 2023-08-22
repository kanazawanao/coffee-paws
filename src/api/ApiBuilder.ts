import { Configuration, CoffeePawsApi } from './clients';
import { auth } from 'config/firebase';

const buildCoffeePawsApi = async (basePath: string) => {
  const token = await auth.currentUser?.getIdToken();
  console.log(token);
  const config = new Configuration({
    basePath: basePath,
    baseOptions: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const coffeePawsApi = new CoffeePawsApi(config);
  return coffeePawsApi;
};

export default {
  buildCoffeePawsApi,
};
