import { useAuthApi } from 'api/hooks/AuthApi';
import { useCoffeePawsNavigate } from './hook';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RequireAuth() {
  const { goToSignInPage } = useCoffeePawsNavigate();

  const { user } = useAuthApi();
  console.log(user);

  React.useEffect(() => {
    if (!user) {
      goToSignInPage();
    }
  }, [goToSignInPage, user]);

  if (!user) return <></>;

  return <Outlet />;
}
