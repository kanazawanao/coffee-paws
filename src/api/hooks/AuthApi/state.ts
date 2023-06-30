import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'infrastructure/firebase';
import React from 'react';

export function useAuthApiState() {
  const [user, setUser] = React.useState('');

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.uid);
      }
    });
  }, []);

  return {
    user,
    setUser,
  };
}
