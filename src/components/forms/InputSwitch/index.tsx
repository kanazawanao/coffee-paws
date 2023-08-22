import classNames from 'classnames';
import Label from 'components/forms/Label';
import React from 'react';

import styles from './style.module.scss';

type Props = {
  id: string;
  label: string;
  checked: boolean;
  enabledLabel: string;
  disabledLabel: string;
  disabled?: boolean;
  onChange: (value: boolean) => void;
};

export default function InputSwitch({
  id,
  label,
  checked,
  enabledLabel,
  disabledLabel,
  disabled,
  onChange,
}: Props) {
  const handleClick = React.useCallback(() => {
    if (disabled) return;
    onChange(!checked);
  }, [checked, disabled, onChange]);

  return (
    <div className={styles.switch}>
      {label && <Label id={id} label={label} />}
      <div
        className={classNames(styles.control, { [styles.disabled]: disabled })}
        onClick={handleClick}
      >
        <label className={styles.switchLabel}>
          {checked ? enabledLabel : disabledLabel}
        </label>
        <input type='checkbox' disabled={disabled} />
        <div
          className={classNames(styles.slideWrapper, {
            [styles.checked]: checked,
            [styles.disabled]: disabled,
          })}
        >
          <div className={styles.slider} />
        </div>
      </div>
    </div>
  );
}
