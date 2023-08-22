import React from 'react';
import { useCreateStoreApi } from './CreateStoreApi';
import { useSearchStoresApi } from './GetStoresApi';
import { useStoresApiState } from './state';

export function useStoresApi() {
  const state = useStoresApiState();
  const { getStores } = useSearchStoresApi(state);
  const { createStore } = useCreateStoreApi();

  React.useEffect(() => {
    getStores();
  }, [getStores]);

  return {
    stores: state.stores,
    createStore,
  };
}
