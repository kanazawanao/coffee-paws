import React from 'react';

export function useAuthApiState() {
  const [user, setUser] = React.useState();
  return {
    user,
    setUser,
  };
}
