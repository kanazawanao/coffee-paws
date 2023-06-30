import React from 'react';

type Props = {
  onSubmit: () => void;
  children: React.ReactNode;
};
export default function Form({ onSubmit, children }: Props) {
  const handleSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );
  return <form onSubmit={handleSubmit}>{children}</form>;
}
