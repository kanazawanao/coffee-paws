import React from 'react';
import CheckedIcon from './CheckedIcon';
import UncheckedIcon from './UnCheckedIcon';
import styles from './style.module.scss';
import Label from '../Label';

type RadioType = {
  value: string;
  label: string;
};

type Props = {
  id: string;
  label: string;
  options: RadioType[];
  selectedValue: string;
  onChange: (value: string) => void;
};
export default function InputRadioGroup({
  id,
  label,
  options,
  selectedValue,
  onChange,
}: Props) {
  const renderCheckIcon = React.useCallback(
    (radio: RadioType) => {
      if (radio.value === selectedValue) {
        return <CheckedIcon />;
      }
      return <UncheckedIcon />;
    },
    [selectedValue],
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );
  return (
    <div>
      {label && <Label id={id} label={label} />}
      <div className={styles.radioGroup}>
        {options.map((option) => (
          <div
            key={option.value}
            className={styles.radioButton}
            onClick={() => {
              onChange(option.value);
            }}
          >
            {renderCheckIcon(option)}
            <label htmlFor={`${id}${option.value}`}>{option.label}</label>
            <input
              id={`${id}${option.value}`}
              type='radio'
              value={option.value}
              checked={option.value === selectedValue}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
