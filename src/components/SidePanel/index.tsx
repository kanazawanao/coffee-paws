import classNames from 'classnames';
import IconButton from 'components/IconButton';
import CloseIcon from 'icons/CloseIcon';
import React from 'react';

import styles from './style.module.scss';

export type Props = {
  title: string;
  children: React.ReactNode;
  onClose: (open: boolean) => void;
  footer?: React.ReactNode;
};

export default function SidePanel({ title, children, onClose, footer }: Props) {
  const closePanel = React.useCallback(() => {
    onClose(false);
  }, [onClose]);

  return (
    <>
      <div className={styles.background} onClick={closePanel} />
      <div className={styles.container}>
        <div className={styles.header}>
          {title}
          <IconButton onClick={closePanel}>
            <CloseIcon />
          </IconButton>
        </div>
        <div
          className={classNames(styles.contents, {
            [styles.hasFooter]: footer,
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
}
