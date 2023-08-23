import { useAuthApi } from 'api/hooks/AuthApi';
import { useCoffeePawsNavigate } from './hook';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RequireAuth() {
  const { goToSignInPageWithFrom } = useCoffeePawsNavigate();

  const { user } = useAuthApi();

  React.useEffect(() => {
    if (!user) {
      goToSignInPageWithFrom();
    }
  }, [goToSignInPageWithFrom, user]);

  if (!user) return <></>;

  return <Outlet />;
}
