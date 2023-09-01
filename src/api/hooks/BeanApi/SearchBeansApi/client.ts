import ApiClient from 'api/hooks/ApiClient';
import { fromApiBean } from '../converter';

class SearchBeansApiClient extends ApiClient {
  public async searchBeans(storeId: string) {
    const client = await this.buildApi();
    const res = await client.getBeans(storeId);
    return res.data.map(fromApiBean);
  }
}

export const client = new SearchBeansApiClient();
