import { useAuthApi } from 'api/hooks/AuthApi';
import FormContent from './FormContent';

export default function SignUpPage() {
  const { signUpRequest } = useAuthApi();
  return (
    <>
      <div>会員登録</div>
      <FormContent onSubmit={signUpRequest} />
    </>
  );
}
