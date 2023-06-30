import React from 'react';
import { client } from './client';
import { useApiClient } from 'api/hooks/ApiClient';

export function useSignInApi() {
  const { callApi } = useApiClient(client.signIn);
  const signIn = React.useCallback(
    async (email: string, password: string) => {
      await callApi(email, password);
    },
    [callApi],
  );

  return {
    signIn,
  };
}
