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
