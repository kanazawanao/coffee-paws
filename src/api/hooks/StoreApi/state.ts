import Store from 'models/Store';
import React from 'react';

export function useStoresApiState() {
  const [stores, setStores] = React.useState<Store[]>([]);

  return {
    stores,
    setStores,
  };
}

export type StoresApiState = ReturnType<typeof useStoresApiState>;

export function useStoreApiState() {
  const [store, setStore] = React.useState<Store | null>(null);

  return {
    store,
    setStore,
  };
}

export type StoreApiState = ReturnType<typeof useStoreApiState>;
