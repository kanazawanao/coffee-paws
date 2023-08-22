import { useAuthApi } from 'api/hooks/AuthApi';
import styles from './style.module.scss';
import { useCoffeePawsNavigate } from 'routes/hook';
import MenuIcon from 'icons/MenuIcon';
import React from 'react';
import SubMenu from 'components/SubMenu';

enum Menu {
  Signin = 'signin',
  Signup = 'signup',
  Stores = 'stores',
  Signout = 'signout',
}

const MenuLabels = {
  [Menu.Signin]: 'サインイン',
  [Menu.Signup]: '会員登録',
  [Menu.Stores]: 'お店一覧',
  [Menu.Signout]: 'ログアウト',
};

function menusToSubMenus(menus: Menu[]) {
  return menus.map((menu) => ({ label: MenuLabels[menu], value: menu }));
}

export default function Header() {
  const { user, signOut } = useAuthApi();
  const { goToSignInPage, goToSignUpPage, goToStoresPage, goToTopPage } =
    useCoffeePawsNavigate();
  const handleMenuClick = React.useCallback(
    (menu: Menu) => {
      if (menu === Menu.Signin) {
        goToSignInPage();
      }
      if (menu === Menu.Signup) {
        goToSignUpPage();
      }
      if (menu === Menu.Stores) {
        goToStoresPage();
      }
      if (menu === Menu.Signout) {
        signOut();
      }
    },
    [goToSignInPage, goToSignUpPage, goToStoresPage, signOut],
  );

  const menus = React.useMemo(
    () =>
      menusToSubMenus([
        ...(!user ? [Menu.Signin, Menu.Signup] : [Menu.Stores, Menu.Signout]),
      ]),
    [user],
  );

  return (
    <div className={styles.header}>
      <SubMenu menus={menus} onClick={handleMenuClick}>
        <MenuIcon />
      </SubMenu>
      <div onClick={goToTopPage} className={styles.title}>
        Coffee Paws
      </div>
    </div>
  );
}
