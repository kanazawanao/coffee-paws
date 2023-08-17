import React from 'react';

import styles from './style.module.scss';

type Props = {
  open: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onCloseClick, children }: Props) {
  React.useEffect(() => {
    // モーダル表示中は背面をスクロールできないようにする
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      // 念の為 cleanup 時にスクロール制限を解除する
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return <></>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={onCloseClick}></div>
      <div className={styles.container}>
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}
