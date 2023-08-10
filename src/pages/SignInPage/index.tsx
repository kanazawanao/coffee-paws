import { useAuthApi } from 'api/hooks/AuthApi';
import FormContent from './FormContent';

import styles from './style.module.scss';
import { useCoffeePawsNavigate } from 'routes/hook';
import React from 'react';

export default function SignInPage() {
  const { goToTopPage } = useCoffeePawsNavigate();
  const { signIn, user } = useAuthApi();

  React.useEffect(() => {
    if (user) {
      goToTopPage();
    }
  }, [goToTopPage, user]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>サインイン</div>
      <FormContent onSubmit={signIn} />
    </div>
  );
}
