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
   * トップページへ遷移する
   */
  const goToStoresPage = React.useCallback(() => {
    navigate(paths.StoresPagePath);
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

  /*
   * 遷移前の情報を保持した状態でサインインページへ遷移する
   */
  const goToSignInPageWithFrom = React.useCallback(() => {
    console.log(location.pathname, location.search);
    navigate(paths.SignInPagePath, {
      state: {
        from: `${location.pathname}${location.search}`,
      },
    });
  }, [navigate]);

  const goToPage = React.useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
  );

  return {
    goToTopPage,
    goToStoresPage,
    goToSignInPage,
    goToSignUpPage,
    goToSignInPageWithFrom,
    goToPage,
  };
}
