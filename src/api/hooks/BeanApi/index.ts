import React from 'react';
import { useCreateBeanApi } from './CreateBeanApi';
import { useSearchBeansApi } from './SearchBeansApi';
import { useBeansApiState } from './state';

export function useBeansApi(storeId: string) {
  const state = useBeansApiState();
  const { searchBeans } = useSearchBeansApi(state);
  const { createBean } = useCreateBeanApi();

  React.useEffect(() => {
    searchBeans(storeId);
  }, [searchBeans, storeId]);

  return {
    beans: state.beans,
    createBean,
  };
}
