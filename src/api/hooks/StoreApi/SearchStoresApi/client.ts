import ApiClient from 'api/hooks/ApiClient';
import { fromApiStore } from '../converter';

class SearchStoresApiClient extends ApiClient {
  public async searchStores() {
    const client = await this.buildApi();
    const res = await client.searchStores();
    return res.data.map(fromApiStore);
  }
}

export const client = new SearchStoresApiClient();
