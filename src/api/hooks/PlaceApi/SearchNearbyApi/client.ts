import ApiClient from 'api/hooks/ApiClient';
import Place from 'models/Place';
import { SearchResult } from 'models/SearchResult';
import { fromApiPlace } from '../converter';

class SearchNearby extends ApiClient {
  public async searchNearby(keyword: string) {
    const client = await this.buildApi();
    const res = await client.getNearby(keyword);
    const result: SearchResult<Place> = {
      records: res.data.results.map(fromApiPlace),
      nextPageToken: res.data.nextPageToken,
    };
    return Promise.resolve(result);
  }
}

export const client = new SearchNearby();
