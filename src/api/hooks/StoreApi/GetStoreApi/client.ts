import ApiClient from 'api/hooks/ApiClient';
import { fromApiStore } from '../converter';

class GetStoreApiClient extends ApiClient {
  public async getStore(storeId: string) {
    const client = await this.buildApi();
    const res = await client.getStore(storeId);
    return fromApiStore(res.data);
  }
}

export const client = new GetStoreApiClient();
