import ApiClient from 'api/hooks/ApiClient';
import { fromApiBean, toApiBean } from '../converter';
import Bean from 'models/Bean';

class CreateBeanApiClient extends ApiClient {
  public async createBean(storeId: string, bean: Bean) {
    const request = toApiBean(bean);
    const client = await this.buildApi();
    const res = await client.createBean(storeId, request);
    return fromApiBean(res.data);
  }
}

export const client = new CreateBeanApiClient();
