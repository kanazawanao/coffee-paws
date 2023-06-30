import { useSignUpRequestApi } from './SignUpRequestApi';
import { useAuthApiState } from './state';

export function useAuthApi() {
  const { user } = useAuthApiState();
  const { signUpRequest } = useSignUpRequestApi();

  return {
    user,
    signUpRequest,
  };
}
