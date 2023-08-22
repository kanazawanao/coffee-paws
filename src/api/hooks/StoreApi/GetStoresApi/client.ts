import ApiClient from 'api/hooks/ApiClient';
import { fromApiStore } from '../converter';

class GetStoresApiClient extends ApiClient {
  public async getStores() {
    const client = await this.buildApi();
    const res = await client.getStores();
    return res.data.map(fromApiStore);
  }
}

export const client = new GetStoresApiClient();
