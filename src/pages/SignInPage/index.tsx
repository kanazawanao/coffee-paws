import { useAuthApi } from 'api/hooks/AuthApi';
import FormContent from './FormContent';

import styles from './style.module.scss';
import { useCoffeePawsNavigate } from 'routes/hook';
import React from 'react';
import { useLocation } from 'react-router';

type LocationType = {
  state: {
    from: string;
  } | null;
};

export default function SignInPage() {
  const { goToTopPage, goToPage } = useCoffeePawsNavigate();
  const { signIn, user } = useAuthApi();
  const locationState = useLocation() as LocationType;

  React.useEffect(() => {
    if (user) {
      const from = locationState.state?.from;
      console.log(from);
      if (from) {
        goToPage(from);
      } else {
        goToTopPage();
      }
    }
  }, [goToPage, goToTopPage, locationState, user]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>サインイン</div>
      <FormContent onSubmit={signIn} />
    </div>
  );
}
