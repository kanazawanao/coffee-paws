import React from 'react';
import styles from './style.module.scss';

export type SubMenuType<Value> = {
  label: string;
  value: Value;
};

type Props<Value> = {
  menus: SubMenuType<Value>[];
  onClick: (value: Value) => void;
  /**
   * メニューの表示位置の起点となる要素
   */
  children: React.ReactNode;
};
export default function SubMenu<Value>({
  menus,
  onClick,
  children,
}: Props<Value>) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {open && (
        <div
          className={styles.submenuBackground}
          onClick={() => setOpen(false)}
        />
      )}
      <div className={styles.submenu} onClick={() => setOpen(!open)}>
        {children}
        {open && (
          <div className={styles.menu}>
            {menus.map((menu) => (
              <div
                className={styles.item}
                key={`${menu.value}`}
                onClick={() => onClick(menu.value)}
              >
                {menu.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
