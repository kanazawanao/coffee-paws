import React from 'react';
import Label from '../Label';

import styles from './style.module.css';

type Props = {
  id: string;
  label?: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
};

export default function InputSelect({ id, label, options, onChange }: Props) {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );
  return (
    <div>
      {label && <Label label={label} />}
      <select id={id} className={styles.select} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
