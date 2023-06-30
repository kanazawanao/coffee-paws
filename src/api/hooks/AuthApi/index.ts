import { useSignInApi } from './SignInApi';
import { useSignOutApi } from './SignOutApi';
import { useSignUpApi } from './SignUpApi';
import { useAuthApiState } from './state';

export function useAuthApi() {
  const { user } = useAuthApiState();
  const { signUp } = useSignUpApi();
  const { signIn } = useSignInApi();
  const { signOut } = useSignOutApi();

  return {
    user,
    signUp,
    signIn,
    signOut,
  };
}
