import React from 'react';
import { useCreateStoreApi } from './CreateStoreApi';
import { useSearchStoresApi } from './SearchStoresApi';
import { useStoreApiState, useStoresApiState } from './state';
import { useGetStoreApi } from './GetStoreApi';

export function useStoresApi() {
  const state = useStoresApiState();
  const { searchStores } = useSearchStoresApi(state);
  const { createStore } = useCreateStoreApi();

  React.useEffect(() => {
    searchStores();
  }, [searchStores]);

  return {
    stores: state.stores,
    createStore,
  };
}

export function useStoreApi(storeId: string) {
  const state = useStoreApiState();
  const { getStore } = useGetStoreApi(state);

  React.useEffect(() => {
    getStore(storeId);
  }, [getStore, storeId]);

  return {
    store: state.store,
  };
}
