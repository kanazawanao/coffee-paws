import { useSignUpRequestApi } from './SignUpRequestApi';

export function useAuthApi() {
  const { signUpRequest } = useSignUpRequestApi();

  return {
    signUpRequest,
  };
}
