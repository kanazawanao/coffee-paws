import { useAuthApi } from 'api/hooks/AuthApi';
import FormContent from './FormContent';

export default function SignInPage() {
  const { signIn } = useAuthApi();
  return (
    <>
      <div>サインイン</div>
      <FormContent onSubmit={signIn} />
    </>
  );
}
