import Axios, { AxiosInstance } from 'axios';
import React from 'react';
import { generateApiError } from '../ApiError';

type ApiFunctionType<ReturnType> = (...args: any[]) => Promise<ReturnType>;

export default class ApiClient {
  axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = Axios.create({
      baseURL: '',
      timeout: 1000,
    });
  }
}

function useClient() {
  const [loading, setLoading] = React.useState(false);
  const callApi = React.useCallback(
    async <ReturnType>(
      apiFunction: ApiFunctionType<ReturnType>,
      ...args: any[]
    ) => {
      try {
        setLoading(true);
        return await apiFunction.bind(new ApiClient())(...args);
      } catch (e) {
        // TODO: エラー内容を設定して画面表示する
        const error = generateApiError(e);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const callApiFunction = React.useCallback(
    async <ReturnType>(
      apiFunction: ApiFunctionType<ReturnType>,
      ...args: any[]
    ) => {
      const result = await callApi<ReturnType>(apiFunction, ...args);
      return result;
    },
    [callApi],
  );

  return {
    loading,
    callApiFunction,
  };
}

export function useApiClient<Result, FunctionType>(
  apiFunction: FunctionType & ApiFunctionType<Result>,
  setResult?: (result: Result) => void,
) {
  const { callApiFunction, loading } = useClient();
  const callApi = React.useCallback(
    async (...args: any[]) => {
      const result = await callApiFunction<Result>(apiFunction, ...args);
      if (setResult) {
        setResult(result);
      }
      return result;
    },
    [apiFunction, callApiFunction, setResult],
  );

  return {
    loading,
    callApi: callApi as unknown as FunctionType,
  };
}
