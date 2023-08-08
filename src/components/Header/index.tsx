import { useAuthApi } from 'api/hooks/AuthApi';

import styles from './style.module.css';
import { useCoffeePawsNavigate } from 'routes/hook';

export default function Headre() {
  const { user, signOut } = useAuthApi();
  const { goToSignInPage, goToSignUpPage } = useCoffeePawsNavigate();
  return (
    <div className={styles.header}>
      {user && <div onClick={signOut}>ログアウト</div>}
      {!user && (
        <div>
          <div onClick={goToSignInPage}>サインイン</div>
          <div onClick={goToSignUpPage}>会員登録</div>
        </div>
      )}
    </div>
  );
}
