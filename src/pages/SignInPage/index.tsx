import { useAuthApi } from 'api/hooks/AuthApi';
import FormContent from './FormContent';

import styles from './style.module.scss';

export default function SignInPage() {
  const { signIn } = useAuthApi();
  return (
    <div className={styles.container}>
      <div>サインイン</div>
      <FormContent onSubmit={signIn} />
    </div>
  );
}
