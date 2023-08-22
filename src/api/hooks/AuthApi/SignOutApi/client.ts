import ApiClient from 'api/hooks/ApiClient';
import { signOut as signOutFromFirebase } from 'firebase/auth';
import { auth } from 'config/firebase';

class SignOutApiClient extends ApiClient {
  async signOut() {
    console.log('signout');
    await signOutFromFirebase(auth);
  }
}

export const client = new SignOutApiClient();
