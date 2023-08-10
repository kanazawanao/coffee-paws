import ApiClient from 'api/hooks/ApiClient';
import { toApiStore } from '../converter';
import Store from 'models/Store';

class CreateStoreApiClient extends ApiClient {
  public async createStore(store: Store) {
    const request = toApiStore(store);
    const client = await this.buildApi();
    const res = await client.createStore(request);
    console.log('CreateStoreApiClient', res);
  }
}

export const client = new CreateStoreApiClient();
