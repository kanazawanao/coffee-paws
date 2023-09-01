import { useCreateBeanApi } from './CreateBeanApi';

export function useBeansApi() {
  const { createBean } = useCreateBeanApi();

  return {
    createBean,
  };
}
