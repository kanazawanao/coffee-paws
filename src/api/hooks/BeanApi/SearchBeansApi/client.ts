import ApiClient from 'api/hooks/ApiClient';
import { fromApiBean } from '../converter';

class SearchBeansApiClient extends ApiClient {
  public async searchBeans() {
    const client = await this.buildApi();
    const res = await client.getBeans();
    return res.data.map(fromApiBean);
  }
}

export const client = new SearchBeansApiClient();
