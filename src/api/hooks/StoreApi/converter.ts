import {
  CreateStore as ApiStoreRequest,
  Store as ApiStore,
} from 'api/clients/api';
import Store from 'models/Store';

export function fromApiStore(apiStore: ApiStore): Store {
  return {
    id: apiStore.id,
    name: apiStore.name,
    address: apiStore.address,
    url: apiStore.url,
    placeId: apiStore.placeId,
  };
}
export function toApiStore(store: Store): ApiStoreRequest {
  return {
    name: store.name,
    address: store.address,
    url: store.url,
    placeId: store.placeId,
  };
}
