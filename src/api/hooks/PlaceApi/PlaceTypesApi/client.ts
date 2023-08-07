import ApiClient from 'api/hooks/ApiClient';
import { fromApiPlaceType } from '../converter';

class PlaceTypesApiClient extends ApiClient {
  public async getPlaceTypes() {
    const client = await this.buildApi();
    const res = await client.getPlaceTypes();
    return res.data.map(fromApiPlaceType);
  }
}

export const client = new PlaceTypesApiClient();
