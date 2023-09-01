import Bean from 'models/Bean';
import React from 'react';

export function useBeansApiState() {
  const [beans, setBeans] = React.useState<Bean[]>([]);

  return {
    beans,
    setBeans,
  };
}

export type BeansApiState = ReturnType<typeof useBeansApiState>;
