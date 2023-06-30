import React from 'react';

type Props = {
  id: string;
  type: 'text' | 'email' | 'password';
  onChange: (value: string) => void;
};
export default function InputText({ id, type, onChange }: Props) {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );
  return <input id={id} type={type} onChange={handleChange} />;
}
