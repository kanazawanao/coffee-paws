import { useAuthApi } from 'api/hooks/AuthApi';
import FormContent from './FormContent';

export default function SignUpPage() {
  const { signUp } = useAuthApi();
  return (
    <>
      <div>会員登録</div>
      <FormContent onSubmit={signUp} />
    </>
  );
}
