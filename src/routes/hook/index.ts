import { useNavigate } from 'react-router-dom';

import * as paths from '../paths';
import React from 'react';

export function useCoffeePawsNavigate() {
  const navigate = useNavigate();

  /**
   * トップページへ遷移する
   */
  const goToTopPage = React.useCallback(() => {
    navigate(paths.RootPath);
  }, [navigate]);

  /**
   * サインインページへ遷移する
   */
  const goToSignInPage = React.useCallback(() => {
    navigate(paths.SignInPagePath);
  }, [navigate]);

  /**
   * サインアップページへ遷移する
   */
  const goToSignUpPage = React.useCallback(() => {
    navigate(paths.SignUpPagePath);
  }, [navigate]);

  return {
    goToTopPage,
    goToSignInPage,
    goToSignUpPage,
  };
}
