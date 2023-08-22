import {
  CreateStore as ApiStoreRequest,
  Store as ApiStore,
} from 'api/clients/api';
import Store from 'models/Store';

export function fromApiStore(apiStore: ApiStore): Store {
  return {
    id: apiStore.id,
    storeType: apiStore.storeType,
    name: apiStore.name,
    address: apiStore.address,
    url: apiStore.url,
  };
}
export function toApiStore(store: Store): ApiStoreRequest {
  return {
    name: store.name,
    storeType: store.storeType,
    address: store.address,
    url: store.url,
  };
}
