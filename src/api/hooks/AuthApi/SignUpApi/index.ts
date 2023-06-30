import React from 'react';
import { client } from './client';
import { useApiClient } from 'api/hooks/ApiClient';

export function useSignUpApi() {
  const { callApi } = useApiClient(client.signUp);
  const signUp = React.useCallback(
    async (email: string, password: string) => {
      await callApi(email, password);
    },
    [callApi],
  );

  return {
    signUp,
  };
}
