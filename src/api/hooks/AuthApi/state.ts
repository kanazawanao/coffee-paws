import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
import React from 'react';
import { useAuthApiActions, useSelectAuthState } from './redux';

export function useAuthApiState() {
  const { user } = useSelectAuthState();
  const { setUser } = useAuthApiActions();

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.uid);
      } else {
        setUser('');
      }
    });
  }, [setUser]);

  return {
    user,
    setUser,
  };
}

export type AuthApiState = ReturnType<typeof useAuthApiState>;
