import React from 'react';
import { useApiClient } from '../../ApiClient';
import { client } from './client';

export function useSignUpRequestApi() {
  const { callApi } = useApiClient(client.signUpRequest);
  const signUpRequest = React.useCallback(
    async (email: string, password: string) => {
      await callApi(email, password);
    },
    [callApi],
  );

  return {
    signUpRequest,
  };
}
