import { useAuthApi } from 'api/hooks/AuthApi';
import styles from './style.module.scss';
import { useCoffeePawsNavigate } from 'routes/hook';
import MenuIcon from 'icons/MenuIcon';
import IconButton from 'components/IconButton';
import React from 'react';
import SubMenu from 'components/SubMenu';

enum Menu {
  Signin = 'signin',
  Signup = 'signup',
}

const MenuLabels = {
  [Menu.Signin]: 'サインイン',
  [Menu.Signup]: '会員登録',
};

function menusToSubMenus(menus: Menu[]) {
  return menus.map((menu) => ({ label: MenuLabels[menu], value: menu }));
}

export default function Headre() {
  const { user } = useAuthApi();
  const { goToSignInPage, goToSignUpPage } = useCoffeePawsNavigate();
  const handleMenuClick = React.useCallback(
    (menu: Menu) => {
      if (menu === Menu.Signin) {
        goToSignInPage();
      }
      if (menu === Menu.Signup) {
        goToSignUpPage();
      }
    },
    [goToSignInPage, goToSignUpPage],
  );

  const menus = React.useMemo(
    () => menusToSubMenus([...(!user ? [Menu.Signin, Menu.Signup] : [])]),
    [user],
  );

  return (
    <div className={styles.header}>
      <SubMenu menus={menus} onClick={handleMenuClick}>
        <IconButton onClick={() => console.log('iconbutton')}>
          <MenuIcon />
        </IconButton>
      </SubMenu>
      <div className={styles.title}>Coffee Paws</div>
    </div>
  );
}
