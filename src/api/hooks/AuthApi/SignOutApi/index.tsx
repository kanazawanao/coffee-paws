import React from 'react';
import { client } from './client';
import { useApiClient } from 'api/hooks/ApiClient';

export function useSignOutApi() {
  const { callApi } = useApiClient(client.signOut);
  const signOut = React.useCallback(async () => {
    await callApi();
  }, [callApi]);

  return {
    signOut,
  };
}
