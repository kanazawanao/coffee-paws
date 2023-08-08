import React from 'react';
import Label from '../Label';

import styles from './style.module.css';

type Props = {
  id: string;
  type: 'text' | 'email' | 'password';
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};
export default function InputText({
  id,
  type,
  label,
  placeholder,
  onChange,
}: Props) {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );
  return (
    <div className={styles.text}>
      {label && <Label id={id} label={label} />}
      <input
        className={styles.inputText}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
